const ALLOW = ["youxuanai.vercel.app","ainav-seven.vercel.app","slq520168-creator.github.io","localhost","127.0.0.1"];
function originHost(req){
  const o = req.headers.origin || req.headers.referer || "";
  try { return new URL(o).hostname; } catch (e) { return ""; }
}
module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  const host = originHost(req);
  if (host && ALLOW.indexOf(host) < 0) { res.status(403).end("forbidden"); return; }
  if (host) res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "null");
  const q = req.query || {};
  const prompt = String(q.p || "").trim().slice(0, 500);
  if (!prompt) { res.status(400).send("empty"); return; }
  const w = Math.min(1024, Math.max(512, parseInt(q.w, 10) || 768));
  const h = Math.min(1024, Math.max(512, parseInt(q.h, 10) || 768));
  const seed = parseInt(q.seed, 10) || Math.floor(Math.random() * 1e9);
  const url = "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt)
    + "?width=" + w + "&height=" + h + "&nologo=true&model=flux&seed=" + seed;
  try {
    const r = await fetch(url, { headers: { "User-Agent": "youxuanai/1.0" } });
    if (!r.ok) { res.status(502).send("upstream " + r.status); return; }
    const buf = Buffer.from(await r.arrayBuffer());
    res.setHeader("Content-Type", r.headers.get("content-type") || "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=600");
    res.status(200).send(buf);
  } catch (e) {
    res.status(502).send("fail");
  }
};
