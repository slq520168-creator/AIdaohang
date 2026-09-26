module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  if (req.method !== "POST") { res.status(405).send("post"); return; }
  const body = typeof req.body === "string" ? safe(req.body) : (req.body || {});
  const messages = Array.isArray(body.messages) ? body.messages.slice(-16) : [];
  if (!messages.length) { res.status(400).send("empty"); return; }
  try {
    const r = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "text/plain" },
      body: JSON.stringify({ messages: messages, model: "openai" })
    });
    const t = String(await r.text()).trim();
    if (r.ok && t) { res.status(200).send(t); return; }
  } catch (e) {}
  try {
    const last = messages[messages.length - 1];
    const sys = messages.filter(function (m) { return m.role === "system"; }).map(function (m) { return m.content; }).join("\n");
    const q = (sys + "\n用户:" + (last && last.content || "") + "\n回复:").slice(0, 800);
    const r2 = await fetch("https://text.pollinations.ai/" + encodeURIComponent(q));
    const t2 = String(await r2.text()).trim();
    if (r2.ok && t2) { res.status(200).send(t2); return; }
  } catch (e) {}
  res.status(502).send("");
};
function safe(s) { try { return JSON.parse(s); } catch (e) { return {}; } }
