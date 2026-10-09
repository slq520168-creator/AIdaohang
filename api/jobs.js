
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
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=1800");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  try {
    const lists = await Promise.all([
      remotive(),
      remoteok(),
      arbeitnow()
    ]);
    const seen = new Set();
    const jobs = [];
    lists.flat().forEach(function (j) {
      if (!j || !j.url || !j.title) return;
      const k = String(j.url).split("?")[0];
      if (seen.has(k)) return;
      seen.add(k);
      jobs.push(j);
    });
    jobs.sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); });
    res.status(200).json({ ok: true, n: jobs.length, jobs: jobs.slice(0, 80) });
  } catch (e) {
    res.status(502).json({ ok: false, n: 0, jobs: [] });
  }
};

function fixText(s){
  s=String(s||"");
  if(!/[ÃÂâ]/.test(s)) return s;
  try { return Buffer.from(s,"latin1").toString("utf8"); } catch(e){ return s; }
}
async function remotive() {
  try {
    const r = await fetch("https://remotive.com/api/remote-jobs", { headers: { Accept: "application/json" } });
    const d = await r.json();
    const arr = (d && d.jobs) || [];
    return arr.slice(0, 40).map(function (x) {
      return {
        title: fixText(x.title),
        company: fixText(x.company_name),
        pay: x.salary || "",
        cat: x.category || "Remote",
        from: "Remotive",
        url: x.url || x.job_type || "",
        ts: x.publication_date ? Date.parse(x.publication_date) : 0
      };
    }).filter(function (x) { return /^https?:/.test(x.url); });
  } catch (e) { return []; }
}

async function remoteok() {
  try {
    const r = await fetch("https://remoteok.com/api", { headers: { Accept: "application/json", "User-Agent": "youxuanai-jobs" } });
    const arr = await r.json();
    return (Array.isArray(arr) ? arr : []).slice(1, 41).map(function (x) {
      return {
        title: fixText(x.position || x.title),
        company: fixText(x.company),
        pay: [x.salary_min, x.salary_max].filter(Boolean).join("-") || "",
        cat: (x.tags && x.tags[0]) || "RemoteOK",
        from: "RemoteOK",
        url: x.url || x.apply_url || "",
        ts: x.date ? Date.parse(x.date) : (x.epoch ? x.epoch * 1000 : 0)
      };
    }).filter(function (x) { return x.title && /^https?:/.test(x.url); });
  } catch (e) { return []; }
}

async function arbeitnow() {
  try {
    const r = await fetch("https://www.arbeitnow.com/api/job-board-api", { headers: { Accept: "application/json" } });
    const d = await r.json();
    const arr = (d && d.data) || [];
    return arr.slice(0, 30).map(function (x) {
      return {
        title: fixText(x.title),
        company: fixText(x.company_name),
        pay: "",
        cat: (x.tags && x.tags[0]) || "Job",
        from: "Arbeitnow",
        url: x.url || "",
        ts: x.created_at ? Date.parse(x.created_at) : 0
      };
    }).filter(function (x) { return x.title && /^https?:/.test(x.url); });
  } catch (e) { return []; }
}
