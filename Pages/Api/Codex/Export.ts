import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase.from('protocols').select('*');

  if (error) return res.status(500).json({ error: error.message });

  res.setHeader('Content-Disposition', 'attachment; filename=codex.json');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(data, null, 2));
}
