import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('protocols').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { style, mechanic, monetization, page = 1, limit = 10 } = req.query;

  const query = supabase.from('protocols').select('*');

  if (style) query.eq('dna->remixStyle', style as string);
  if (mechanic) query.eq('dna->remixMechanic', mechanic as string);
  if (monetization) query.eq('dna->monetization', monetization as string);

  const offset = (Number(page) - 1) * Number(limit);
  query.range(offset, offset + Number(limit) - 1);

  const { data, error } = await query;

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}
