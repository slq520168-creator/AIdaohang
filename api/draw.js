const ALLOW = ["youxuanai.vercel.app","ainav-seven.vercel.app","slq520168-creator.github.io","localhost","127.0.0.1"];
const HORDE = "https://aihorde.net/api/v2";
const KEY = "0000000000";
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
  const headers = { "Content-Type": "application/json", apikey: KEY, "Client-Agent": "youxuanai:1.0:youxuanai" };
  const start = await fetch(HORDE + "/generate/async", {
    method: "POST", headers,
    body: JSON.stringify({
      prompt: prompt,
      params: { width: w, height: h, steps: 20, n: 1, sampler_name: "k_euler" },
      models: ["AlbedoBase XL (SDXL)"],
      nsfw: false,
      censor_nsfw: true,
      r2: true
    })
  });
  const job = await start.json();
  if (!job.id) { res.status(502).json(job); return; }
  const deadline = Date.now() + 25000;
  while (Date.now() < deadline) {
    await new Promise(function (r) { setTimeout(r, 2000); });
    const chk = await fetch(HORDE + "/generate/check/" + job.id, { headers });
    const st = await chk.json();
    if (st.done) {
      const got = await fetch(HORDE + "/generate/status/" + job.id, { headers });
      const done = await got.json();
      const url = done && done.generations && done.generations[0] && done.generations[0].img;
      if (!url) { res.status(502).json(done); return; }
      const img = await fetch(url);
      const buf = Buffer.from(await img.arrayBuffer());
      res.setHeader("Content-Type", "image/webp");
      res.setHeader("Cache-Control", "public, max-age=600");
      res.status(200).send(buf);
      return;
    }
    if (st.faulted) { res.status(502).json(st); return; }
  }
  res.status(202).json({ pending: true, id: job.id });
};
