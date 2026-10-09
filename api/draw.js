
const ALLOW = ["youxuanai.vercel.app","ainav-seven.vercel.app","slq520168-creator.github.io","localhost","127.0.0.1"];
const hits = new Map();
function clientIp(req){
  const x = req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || "";
  return String(x).split(",")[0].trim() || "0";
}
function originHost(req){
  const o = req.headers.origin || req.headers.referer || "";
  try { return new URL(o).hostname; } catch (e) { return ""; }
}
function guard(req, res){
  const host = originHost(req);
  const ok = ALLOW.indexOf(host) >= 0;
  if (host && ALLOW.indexOf(host) >= 0) res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "null");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  if (!ok) { res.status(403).end("forbidden"); return false; }
  const ip = clientIp(req);
  const now = Date.now();
  const row = hits.get(ip) || [];
  const recent = row.filter(function(t){ return now - t < 60000; });
  if (recent.length >= 20) { res.status(429).end("rate"); return false; }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  if (!guard(req, res)) return;
    if (req.method === "OPTIONS") { res.status(204).end(); return; }
  const q = req.query || {};
  let prompt = String(q.p || "").trim().slice(0, 500);
  if (!prompt) { res.status(400).send("empty"); return; }
  if (/[\u3400-\u9fff]/.test(prompt)) {
    const en = await zhEn(prompt);
    if (en) prompt = en;
  }
  prompt = "photorealistic photograph, real human, real skin pores, natural makeup, 35mm film, sharp eyes, " + prompt + ", no anime, no cartoon, no illustration, no 3d render, no cgi";
  const w = Math.min(1344, Math.max(512, parseInt(q.w, 10) || 1024));
  const h = Math.min(1344, Math.max(512, parseInt(q.h, 10) || 1024));
  const seed = String(Date.now() % 1999999999);
  const enc = encodeURIComponent(prompt);
  const list = [
    "https://image.pollinations.ai/prompt/" + enc + "?width=" + w + "&height=" + h + "&seed=" + seed + "&model=flux&nologo=true&enhance=true",
    "https://gen.pollinations.ai/image/" + enc + "?model=flux&width=" + w + "&height=" + h + "&seed=" + seed + "&nologo=true",
    "https://image.pollinations.ai/prompt/" + enc + "?width=" + w + "&height=" + h + "&model=flux&nologo=true"
  ];
  for (let i = 0; i < list.length; i++) {
    try {
      const r = await fetch(list[i], {
        headers: { "User-Agent": "Mozilla/5.0", Accept: "image/jpeg,image/png,image/*,*/*" },
        redirect: "follow"
      });
      if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length < 2500) continue;
      const ct = String(r.headers.get("content-type") || "image/jpeg");
      res.setHeader("Content-Type", ct.indexOf("image/") === 0 ? ct : "image/jpeg");
      res.setHeader("Cache-Control", "public, max-age=600");
      res.status(200).send(buf);
      return;
    } catch (e) {}
  }
  res.status(502).end("upstream");
};
async function zhEn(q) {
  try {
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=zh&tl=en&q=" + encodeURIComponent(q);
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return "";
    const data = await r.json();
    if (Array.isArray(data) && Array.isArray(data[0])) {
      return data[0].map(function (x) { return x && x[0] ? x[0] : ""; }).join("").trim();
    }
  } catch (e) {}
  return "";
}
