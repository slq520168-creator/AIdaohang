export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });
  const { txid, product } = req.body || {};
  if (!txid || !/^[0-9a-fA-F]{64}$/.test(txid)) return res.status(400).json({ error: 'invalid_txid' });
  const ADDRESS = 'TG9nQjKuGgKkcnnwQ73HGZxqWd1tS64F2c';
  const USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
  const PRICES = { manual: 9.9, templates: 19.9, prompts: 29.9, bundle: 49 };
  const NAMES = { manual: 'API手册', templates: '口播模板', prompts: '提示词合集', bundle: '三件套' };
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

    const LINKS = {
      manual: 'https://youxuanai.vercel.app/files/api-manual.pdf',
      templates: 'https://youxuanai.vercel.app/files/video-templates.zip',
      prompts: 'https://youxuanai.vercel.app/files/prompts.zip',
      bundle: 'https://youxuanai.vercel.app/files/bundle.zip'
    };
    const download = LINKS[product] || LINKS.manual;

    // Telegram notify
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat = process.env.TELEGRAM_CHAT_ID;
    if (token && chat) {
      const text = `新订单\n产品：${NAMES[product] || product}\n金额：${expected} USDT\nTXID：${txid}\n下载：${download}`;
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chat, text })
      }).catch(() => {});
    }

    return res.json({ ok: true, download });
  } catch (e) {
    return res.status(500).json({ error: 'verify_failed' });
  }
}
