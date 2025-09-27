import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexAtlas() {
  const [protocols, setProtocols] = useState<any[]>([]);

  useEffect(() => {
    const fetchProtocols = async () => {
      const { data } = await supabase.from('protocols').select('*');
      setProtocols(data || []);
    };
    fetchProtocols();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Codex Atlas</h1>
      <p className="text-gray-400 mb-4">Visual map of remix protocols across epochs and styles.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {protocols.map((p) => (
          <div key={p.id} className="bg-gray-900 p-4 rounded shadow-lg text-center hover:scale-105 transition-all border border-purple-700">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-400">{p.epoch}</p>
            <p className="text-xs text-gray-500">{p.dna?.remixStyle} • {p.dna?.monetization}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
