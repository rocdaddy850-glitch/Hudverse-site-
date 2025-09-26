import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('rituals').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { scroll_name, badge_name, staked } = req.body;
    const { error } = await supabase
      .from('rituals')
      .insert([{
        scroll_name,
        badge_name,
        staked,
        unlocked: staked,
        timestamp: new Date().toISOString()
      }]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Ritual saved.' });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
