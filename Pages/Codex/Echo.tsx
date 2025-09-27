import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';

export default function ProtocolEcho() {
  const router = useRouter();
  const { id } = router.query;
  const [protocol, setProtocol] = useState<any>(null);
  const [rituals, setRituals] = useState<any[]>([]);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const { data: proto } = await supabase.from('protocols').select('*').eq('id', id).single();
      const { data: ritualData } = await supabase.from('rituals').select('*').ilike('scroll_name', `%${proto?.name}%`);
      setProtocol(proto);
      setRituals(ritualData || []);
    };
    fetchData();
  }, [id]);

  if (!protocol) return <main className="min-h-screen bg-black text-white p-8"><h1 className="text-3xl font-bold">Loading Echo...</h1></main>;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Protocol Echo: {protocol.name}</h1>
      <p className="text-gray-400 mb-6">Replaying impact across rituals and epochs.</p>

      <ul className="space-y-4">
        {rituals.map((r) => (
          <li key={r.id} className="bg-gray-900 p-4 rounded shadow-lg">
            <p className="text-lg font-semibold">{r.scroll_name} → {r.badge_name}</p>
            <p className="text-sm text-gray-400">{new Date(r.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
