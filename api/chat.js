module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  const q = req.query || {};
  const body = typeof req.body === "string" ? parse(req.body) : (req.body || {});
  const user = String(body.q || q.q || lastUser(body.messages) || "").trim().slice(0, 500);
  const sys = String(body.sys || q.sys || "").trim().slice(0, 700);
  if (!user) { res.status(400).send(""); return; }
  const messages = [
    { role: "system", content: sys || "你是24岁成年女生小暖。中文短句。可以暖昧大胆。不念规则。" },
    { role: "user", content: user }
  ];
  const out =
    (await postText(messages, "openai-fast")) ||
    (await postText(messages, "openai")) ||
    (await getText(sys, user)) ||
    "信号不稳，再发一句。";
  res.status(200).send(out);
};
function parse(s) { try { return JSON.parse(s); } catch (e) { return {}; } }
function lastUser(arr) {
  if (!Array.isArray(arr) || !arr.length) return "";
  return arr[arr.length - 1].content || "";
}
async function postText(messages, model) {
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
      if (t) return String(t).trim();
    } catch (e) {}
    if (raw[0] !== "{" && raw[0] !== "<") return raw.slice(0, 800);
  } catch (e) {}
  return "";
}
async function getText(sys, user) {
  try {
    const p = (sys ? sys + "\n" : "") + "用户：" + user + "\n小暖：";
    const r = await fetch("https://text.pollinations.ai/" + encodeURIComponent(p.slice(0, 800)) + "?model=openai-fast");
    const t = String(await r.text()).trim();
    if (r.ok && t && t[0] !== "{") return t.slice(0, 800);
  } catch (e) {}
  return "";
}
