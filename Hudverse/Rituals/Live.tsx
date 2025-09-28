import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function LiveRituals() {
  const [rituals, setRituals] = useState<any[]>([]);

  useEffect(() => {
    const fetchInitial = async () => {
      const { data } = await supabase.from('rituals').select('*').order('timestamp', { ascending: false }).limit(5);
      setRituals(data || []);
    };

    const channel = supabase
      .channel('rituals-updates')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'rituals' }, (payload) => {
        setRituals((prev) => [payload.new, ...prev.slice(0, 4)]);
      })
      .subscribe();

    fetchInitial();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Live Ritual Echoes</h1>
      <ul className="space-y-4">
        {rituals.map((r) => (
          <li key={r.id} className="bg-gray-900 p-4 rounded">
            <strong>{r.scroll_name}</strong> → {r.badge_name} ({r.epoch})
            <p className="text-sm text-gray-400 mt-1">{r.lore}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
