import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function HUDverseConstellation() {
  const [clusters, setClusters] = useState<any[]>([]);

  useEffect(() => {
    const fetchClusters = async () => {
      const { data } = await supabase.from('rituals').select('*');
      setClusters(data || []);
    };
    fetchClusters();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Constellation</h1>
      <p className="text-gray-400 mb-4">Visualize remix clusters as celestial formations.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clusters.map((c) => (
          <div key={c.id} className="bg-gray-900 p-4 rounded shadow-lg text-center border border-indigo-600 hover:scale-105 transition-all">
            <h2 className="text-lg font-semibold">{c.scroll_name}</h2>
            <p className="text-sm text-gray-400">→ {c.badge_name}</p>
            <p className="text-xs text-gray-500">{new Date(c.timestamp).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
