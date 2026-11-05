export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });
  const { txid, product } = req.body || {};
  if (!txid || !/^[0-9a-fA-F]{64}$/.test(txid)) return res.status(400).json({ error: 'invalid_txid' });
  const ADDRESS = 'TG9nQjKuGgKkcnnwQ73HGZxqWd1tS64F2c';
  const USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
  const PRICES = { manual: 9.9, templates: 19.9, prompts: 29.9, bundle: 49 };
  const expected = PRICES[product];
  if (!expected) return res.status(400).json({ error: 'unknown_product' });

  try {
    const r = await fetch(`https://api.trongrid.io/v1/accounts/${ADDRESS}/transactions/trc20?limit=20&contract_address=${USDT}`, {
      headers: { 'TRON-PRO-API-KEY': process.env.TRONGRID_KEY || '' }
    });
    const j = await r.json();
    const txs = j.data || [];
    const match = txs.find(t => 
      t.transaction_id?.toUpperCase() === txid.toUpperCase() &&
      t.to === ADDRESS &&
      Math.abs(Number(t.value) / 1e6 - expected) < 0.1
    );
    if (!match) return res.status(402).json({ error: 'payment_not_found' });

    // Auto delivery links (replace with real files later)
    const LINKS = {
      manual: 'https://youxuanai.vercel.app/files/api-manual.pdf',
      templates: 'https://youxuanai.vercel.app/files/video-templates.zip',
      prompts: 'https://youxuanai.vercel.app/files/prompts.zip',
      bundle: 'https://youxuanai.vercel.app/files/bundle.zip'
    };
    return res.json({ ok: true, download: LINKS[product] || LINKS.manual });
  } catch (e) {
    return res.status(500).json({ error: 'verify_failed' });
  }
}
