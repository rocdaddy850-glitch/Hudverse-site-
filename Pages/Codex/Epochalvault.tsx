import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexVault() {
  const [artifacts, setArtifacts] = useState<any[]>([]);

  useEffect(() => {
    const fetchVault = async () => {
      const { data } = await supabase.from('artifacts').select('*').order('epoch', { ascending: true });
      setArtifacts(data || []);
    };
    fetchVault();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Vault</h1>
      <p className="text-gray-400 mb-4">Store and retrieve remix artifacts across epochs.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {artifacts.map((a) => (
          <div key={a.id} className="bg-gray-900 p-4 rounded shadow-lg text-center border border-yellow-600 hover:scale-105 transition-all">
            <h2 className="text-lg font-semibold">{a.name}</h2>
            <p className="text-sm text-gray-400">Epoch: {a.epoch}</p>
            <p className="text-xs text-gray-500">{a.type} • {a.origin}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
