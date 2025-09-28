// Browse every scroll ever minted
// Filter by epoch, mechanic, mutation level, and origin
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexScrolls() {
  const [scrolls, setScrolls] = useState<any[]>([]);
  const [epoch, setEpoch] = useState('');

  useEffect(() => {
    const fetchScrolls = async () => {
      const { data } = await supabase.from('scrolls').select('*').eq('epoch', epoch);
      setScrolls(data || []);
    };
    if (epoch) fetchScrolls();
  }, [epoch]);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Scroll Browser</h1>
      <p className="text-gray-400 mb-4">Browse scrolls by epoch, mechanic, and mutation level.</p>

      <input type="text" placeholder="Epoch (e.g. Genesis)" value={epoch} onChange={(e) => setEpoch(e.target.value)} className="bg-gray-800 p-2 rounded w-full mb-4" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {scrolls.map((s) => (
          <div key={s.id} className="bg-gray-900 p-4 rounded border border-yellow-600">
            <h2 className="text-lg font-semibold">{s.name}</h2>
            <p className="text-sm text-gray-400">Mutation: {s.mutation_level}</p>
            <p className="text-xs text-gray-500">Mechanic: {s.mechanic}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexScroll() {
  const [scrolls, setScrolls] = useState<any[]>([]);

  useEffect(() => {
    const fetchScrolls = async () => {
      const { data } = await supabase
        .from('rituals')
        .select('scroll_name, badge_name, epoch, lore')
        .order('timestamp', { ascending: false })
        .limit(10);
      setScrolls(data || []);
    };

    fetchScrolls();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Codex Scrolls</h1>
      <p className="text-gray-400 mb-4">Minted lore fragments from fused rituals.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scrolls.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded shadow">
            <h2 className="text-xl font-semibold">{s.scroll_name} → {s.badge_name}</h2>
            <p className="text-sm text-gray-400 mb-2">Epoch: {s.epoch}</p>
            <p className="text-sm italic">{s.lore}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
