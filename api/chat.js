module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  const body = typeof req.body === "string" ? safe(req.body) : (req.body || {});
  const q = req.query || {};
  const messages = Array.isArray(body.messages) ? body.messages.slice(-14) : [];
  const one = String(q.q || body.q || "").trim();
  const sys = String(body.sys || q.sys || "").trim();
  const user = messages.length ? String(messages[messages.length - 1].content || "") : one;
  const prompt = ((sys ? sys + "\n" : "") + "用户：" + user + "\n你：").slice(0, 900);
  if (!user) { res.status(400).send(""); return; }
  const urls = [
    "https://text.pollinations.ai/" + encodeURIComponent(prompt),
    "https://text.pollinations.ai/" + encodeURIComponent(user)
  ];
  for (let i = 0; i < urls.length; i++) {
    try {
      const r = await fetch(urls[i], { headers: { Accept: "text/plain" } });
      const t = String(await r.text()).trim();
      if (r.ok && t && t.length < 2000) { res.status(200).send(t); return; }
    } catch (e) {}
  }
  res.status(200).send("信号有点慢，你再说一句？");
};
function safe(s) { try { return JSON.parse(s); } catch (e) { return {}; } }
