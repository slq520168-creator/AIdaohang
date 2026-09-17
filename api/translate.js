module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "no-store");
  const q = String((req.query && req.query.q) || "").slice(0, 500);
  const sl = String((req.query && req.query.sl) || "auto");
  const tl = String((req.query && req.query.tl) || "en");
  if (!q) {
    res.status(400).json({ error: "empty" });
    return;
  }
  const url =
    "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=" +
    encodeURIComponent(sl) +
    "&tl=" +
    encodeURIComponent(tl) +
    "&q=" +
    encodeURIComponent(q);
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "fail" });
  }
};
