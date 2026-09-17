module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
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
