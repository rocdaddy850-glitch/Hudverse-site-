import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function HUDverseLegend() {
  const [protocols, setProtocols] = useState<any[]>([]);

  useEffect(() => {
    const fetchProtocols = async () => {
      const { data } = await supabase.from('protocols').select('*').order('launch_at', { ascending: true });
      setProtocols(data || []);
    };
    fetchProtocols();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">HUDverse Legend</h1>
      <p className="text-gray-400 mb-4">A scrollable mythic timeline of every launch, remix, and ritual.</p>

      <div className="space-y-6 border-l border-yellow-500 pl-6">
        {protocols.map((p) => (
          <div key={p.id} className="relative">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
            <div className="bg-gray-900 p-4 rounded shadow-lg">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-sm text-gray-400">{p.epoch} • {new Date(p.launch_at).toLocaleString()}</p>
              <p className="text-xs italic mt-2">{p.lore}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
