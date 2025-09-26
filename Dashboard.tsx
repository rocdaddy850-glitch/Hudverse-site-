import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Badge from '../components/Badge';

export default function Dashboard() {
  const [protocols, setProtocols] = useState<any[]>([]);
  const [badges, setBadges] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: protocolData } = await supabase.from('protocols').select('*');
      const { data: badgeData } = await supabase.from('badges').select('*');
      setProtocols(protocolData || []);
      setBadges(badgeData || []);
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Ancestry Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {protocols.map((p) => (
          <div key={p.id} className="bg-gray-800 p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-400">Epoch: {p.epoch}</p>
            <p className="text-sm italic">{p.lore}</p>
            <div className="mt-4">
              {badges
                .filter((b) => b.protocol_id === p.id)
                .map((b) => (
                  <Badge key={b.id} id={b.id} name={b.badge_id} mutationLevel={b.mutation_level} interactions={b.interactions} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
