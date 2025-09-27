import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function HUDverseRituals() {
  const [rituals, setRituals] = useState<any[]>([]);

  useEffect(() => {
    const fetchRituals = async () => {
      const { data } = await supabase.from('rituals').select('*').order('timestamp', { ascending: false });
      setRituals(data || []);
    };
    fetchRituals();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Live Rituals</h1>
      <p className="text-gray-400 mb-4">See all active remix rituals in real time.</p>

      <div className="space-y-4">
        {rituals.map((r) => (
          <div key={r.id} className="bg-gray-900 p-4 rounded shadow-lg border-l-4 border-indigo-600">
            <p className="text-lg font-semibold">{r.scroll_name} → {r.badge_name}</p>
            <p className="text-sm text-gray-400">{new Date(r.timestamp).toLocaleString()}</p>
            <p className="text-xs italic">{r.lore || 'No lore attached.'}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
