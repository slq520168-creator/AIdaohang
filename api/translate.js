
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
  const ok = !host || ALLOW.indexOf(host) >= 0;
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
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  const body = typeof req.body === "string" ? safeJson(req.body) : req.body || {};
  const q = String((req.query && req.query.q) || body.q || "").trim().slice(0, 800);
  const sl = String((req.query && req.query.sl) || body.sl || "auto");
  const tl = String((req.query && req.query.tl) || body.tl || "en");
  if (!q) {
    res.status(400).json({ error: "empty" });
    return;
  }
  try {
    const text = (await google(q, sl, tl)) || (await memory(q, sl, tl));
    if (!text) {
      res.status(502).json({ error: "fail" });
      return;
    }
    res.status(200).json({ text: text, sl: sl, tl: tl });
  } catch (e) {
    res.status(500).json({ error: "fail" });
  }
};

function safeJson(s) {
  try {
    return JSON.parse(s);
  } catch (e) {
    return {};
  }
}

async function google(q, sl, tl) {
  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=" +
    encodeURIComponent(sl) +
    "&tl=" +
    encodeURIComponent(tl) +
    "&q=" +
    encodeURIComponent(q);
  const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) return "";
  const data = await r.json();
  if (Array.isArray(data) && Array.isArray(data[0])) {
    return data[0].map(function (x) { return x && x[0] ? x[0] : ""; }).join("").trim();
  }
  return "";
}

async function memory(q, sl, tl) {
  const pair = (sl === "auto" ? "zh" : sl) + "|" + tl;
  const url =
    "https://api.mymemory.translated.net/get?q=" +
    encodeURIComponent(q) +
    "&langpair=" +
    encodeURIComponent(pair);
  const r = await fetch(url);
  if (!r.ok) return "";
  const data = await r.json();
  const t = data && data.responseData && data.responseData.translatedText;
  return t ? String(t).trim() : "";
}
