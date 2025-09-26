import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { scroll_name, badge_name, staked } = req.body;

  // Trigger cinematic animation, lore reveal, or external call
  console.log(`🔮 Ritual Triggered: ${scroll_name} → ${badge_name} | Staked: ${staked}`);

  // Example: call external lore engine
  // await fetch('https://lore-engine.io/trigger', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ scroll_name, badge_name, staked })
  // });

  return res.status(200).json({ message: 'Webhook received and processed.' });
}
