import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Obelisks() {
  const [badges, setBadges] = useState<any[]>([]);

  useEffect(() => {
    const fetchBadges = async () => {
      const { data } = await supabase.from('badges').select('*').order('mutationLevel', { ascending: false });
      setBadges(data || []);
    };
    fetchBadges();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Obelisks</h1>
      <p className="text-gray-400 mb-4">Visual monuments of the most mutated badges and scrolls.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((b) => (
          <div key={b.id} className="bg-gray-900 p-4 rounded shadow-lg text-center border border-purple-700 hover:scale-105 transition-all">
            <h2 className="text-lg font-semibold">{b.name}</h2>
            <p className="text-sm text-gray-400">Mutation Level: {b.mutationLevel}</p>
            <p className="text-xs text-gray-500">Interactions: {b.interactions}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
