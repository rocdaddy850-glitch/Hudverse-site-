import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexChronicle() {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    const fetchChronicle = async () => {
      const { data } = await supabase.from('rituals').select('*').order('timestamp', { ascending: true });
      setEntries(data || []);
    };
    fetchChronicle();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Lore Chronicle</h1>
      <p className="text-gray-400 mb-4">Your scrollable remix journal across epochs and rituals.</p>

      <ul className="space-y-4">
        {entries.map((e) => (
          <li key={e.id} className="bg-gray-900 p-4 rounded shadow-lg border-l-4 border-yellow-500">
            <p className="text-lg font-semibold">{e.scroll_name} → {e.badge_name}</p>
            <p className="text-sm text-gray-400">{new Date(e.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
