
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
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  const q = req.query || {};
  const body = typeof req.body === "string" ? parse(req.body) : (req.body || {});
  const mode = String(body.mode || q.mode || "").trim();
  const novel = mode === "novel";
  const user = String(body.q || q.q || lastUser(body.messages) || "").trim().slice(0, novel ? 4000 : 500);
  const sys = String(body.sys || q.sys || "").trim().slice(0, novel ? 1500 : 700);
  if (!user) { res.status(400).send(""); return; }
  const messages = [
    { role: "system", content: sys || (novel ? NOVEL_SYS : "你是24岁成年女生小暖。中文短句。可以暖昧大胆。不念规则。") },
    { role: "user", content: user }
  ];
  const out =
    (await postText(messages, novel ? "openai" : "openai-fast", novel ? 6000 : 800)) ||
    (await postText(messages, "openai-fast", novel ? 6000 : 800)) ||
    (await getText(sys, user, novel ? 2000 : 800)) ||
    "信号不稳，再试一次。";
  res.status(200).send(out);
};
const NOVEL_SYS = "你是专业中文小说作家。直接输出正文，不要解释规则。章节连贯，人物稳定，场景具体。";
function parse(s) { try { return JSON.parse(s); } catch (e) { return {}; } }
function lastUser(arr) {
  if (!Array.isArray(arr) || !arr.length) return "";
  return arr[arr.length - 1].content || "";
}
async function postText(messages, model, max) {
  try {
    const r = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json,text/plain" },
      body: JSON.stringify({ messages: messages, model: model, private: true })
    });
    const raw = String(await r.text()).trim();
    if (!r.ok || !raw) return "";
    try {
      const j = JSON.parse(raw);
      const t = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
      if (t) return String(t).trim().slice(0, max);
    } catch (e) {}
    if (raw[0] !== "{" && raw[0] !== "<") return raw.slice(0, max);
  } catch (e) {}
  return "";
}
async function getText(sys, user, max) {
  try {
    const p = (sys ? sys + "\n" : "") + user;
    const r = await fetch("https://text.pollinations.ai/" + encodeURIComponent(p.slice(0, 800)) + "?model=openai");
    const t = String(await r.text()).trim();
    if (r.ok && t && t[0] !== "{") return t.slice(0, max);
  } catch (e) {}
  return "";
}
