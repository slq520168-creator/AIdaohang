module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  const q = req.query || {};
  let prompt = String(q.p || "").trim().slice(0, 500);
  if (!prompt) { res.status(400).send("empty"); return; }
  if (/[\u3400-\u9fff]/.test(prompt)) {
    const en = await zhEn(prompt);
    if (en) prompt = en;
  }
  if (prompt.length < 60) {
    prompt += ", cinematic photo, photorealistic, detailed, sharp";
  }
  const w = 1024;
  const h = String(q.h || "1024") === "768" ? 768 : 1024;
  const seed = String(Date.now() % 1999999999);
  const enc = encodeURIComponent(prompt);
  const list = [
    "https://gen.pollinations.ai/image/" + enc + "?width=" + w + "&height=" + w + "&seed=" + seed,
    "https://image.pollinations.ai/prompt/" + enc + "?width=" + w + "&height=" + w + "&seed=" + seed + "&model=flux",
    "https://image.pollinations.ai/prompt/" + enc + "?width=768&height=768&model=turbo"
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
  res.writeHead(302, { Location: list[0], "Cache-Control": "no-store" });
  res.end();
};

async function zhEn(q) {
  try {
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=zh&tl=en&q=" +
      encodeURIComponent(q);
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return "";
    const data = await r.json();
    if (Array.isArray(data) && Array.isArray(data[0])) {
      return data[0].map(function (x) { return x && x[0] ? x[0] : ""; }).join("").trim();
    }
  } catch (e) {}
  return "";
}
