module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  const q = req.query || {};
  let prompt = String(q.p || "").trim().slice(0, 800);
  const model = String(q.model || "flux").replace(/[^a-z0-9._\/-]/gi, "").slice(0, 40) || "flux";
  const width = clamp(q.w, 512, 1280, 768);
  const height = clamp(q.h, 512, 1280, 1024);
  const seed = String(parseInt(q.seed, 10) || Date.now() % 2000000000);
  if (!prompt) { res.status(400).send("empty"); return; }
  if (/[\u3400-\u9fff]/.test(prompt)) {
    const en = await zhEn(prompt);
    if (en) prompt = en;
  }
  if (q.boost === "1" && prompt.indexOf("highly detailed") < 0) {
    prompt += ", highly detailed, sharp focus, 8k, cinematic lighting, photorealistic";
  }
  const paths = [
    "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt) + "?width=" + width + "&height=" + height + "&seed=" + seed + "&model=" + encodeURIComponent(model) + "&enhance=true&nologo=true",
    "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt) + "?width=" + width + "&height=" + height + "&seed=" + seed + "&model=flux&enhance=true",
    "https://gen.pollinations.ai/image/" + encodeURIComponent(prompt) + "?width=" + width + "&height=" + height + "&model=flux"
  ];
  for (let i = 0; i < paths.length; i++) {
    try {
      const r = await fetch(paths[i], {
        headers: { "User-Agent": "Mozilla/5.0", Accept: "image/*,*/*" },
        redirect: "follow"
      });
      const ct = String(r.headers.get("content-type") || "");
      if (!r.ok || ct.indexOf("image") < 0) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length < 2000) continue;
      res.setHeader("Content-Type", ct.indexOf("png") >= 0 ? "image/png" : "image/jpeg");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.status(200).send(buf);
      return;
    } catch (e) {}
  }
  res.status(502).send("fail");
};

function clamp(v, min, max, d) {
  const n = parseInt(v, 10);
  if (!n) return d;
  return Math.max(min, Math.min(max, n));
}

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
