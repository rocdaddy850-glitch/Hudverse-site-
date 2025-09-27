import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function RitualChain() {
  const [rituals, setRituals] = useState<any[]>([]);

  useEffect(() => {
    const fetchRituals = async () => {
      const { data } = await supabase.from('rituals').select('*').order('timestamp', { ascending: true });
      setRituals(data || []);
    };
    fetchRituals();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Chain</h1>
      <p className="text-gray-400 mb-4">Scrollable timeline of ritual lineage and remix ancestry.</p>

      <div className="space-y-6 border-l border-purple-700 pl-6">
        {rituals.map((r, i) => (
          <div key={r.id} className="relative">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-purple-600 rounded-full border-2 border-white"></div>
            <div className="bg-gray-900 p-4 rounded shadow-lg">
              <p className="text-lg font-semibold">{r.scroll_name} → {r.badge_name}</p>
              <p className="text-sm text-gray-400">Staked: {r.staked ? 'Yes' : 'No'} | {new Date(r.timestamp).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
