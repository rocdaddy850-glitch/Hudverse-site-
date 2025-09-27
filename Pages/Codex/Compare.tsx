import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CompareCodex() {
  const [protocols, setProtocols] = useState<any[]>([]);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [selected, setSelected] = useState<any[]>([]);

  useEffect(() => {
    const fetchProtocols = async () => {
      const { data } = await supabase.from('protocols').select('*');
      setProtocols(data || []);
    };
    fetchProtocols();
  }, []);

  useEffect(() => {
    const filtered = protocols.filter((p) => p.id === first || p.id === second);
    setSelected(filtered);
  }, [first, second, protocols]);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Compare Protocols</h1>
      <div className="flex gap-4 mb-6">
        <select onChange={(e) => setFirst(e.target.value)} className="bg-gray-800 text-white p-2 rounded w-1/2">
          <option value="">Select First</option>
          {protocols.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <select onChange={(e) => setSecond(e.target.value)} className="bg-gray-800 text-white p-2 rounded w-1/2">
          <option value="">Select Second</option>
          {protocols.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>

      {selected.length === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selected.map((p) => (
            <div key={p.id} className="bg-gray-900 p-4 rounded shadow-lg">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-sm text-gray-400">Epoch: {p.epoch}</p>
              <p className="text-sm">Style: {p.dna?.remixStyle}</p>
              <p className="text-sm">Mechanic: {p.dna?.remixMechanic}</p>
              <p className="text-sm">Monetization: {p.dna?.monetization}</p>
              <p className="text-xs italic mt-2">{p.lore}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
            }
