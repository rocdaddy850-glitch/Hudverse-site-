import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Protocol = {
  id: string;
  name: string;
  epoch: string;
  lore: string;
  dna: {
    remixStyle: string;
    remixMechanic: string;
    monetization: string;
  };
};

export default function Codex() {
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [filtered, setFiltered] = useState<Protocol[]>([]);
  const [filters, setFilters] = useState({
    style: '',
    mechanic: '',
    monetization: ''
  });

  useEffect(() => {
    const fetchProtocols = async () => {
      const { data } = await supabase.from('protocols').select('*');
      setProtocols(data || []);
      setFiltered(data || []);
    };
    fetchProtocols();
  }, []);

  useEffect(() => {
    const { style, mechanic, monetization } = filters;
    const result = protocols.filter((p) =>
      (!style || p.dna?.remixStyle === style) &&
      (!mechanic || p.dna?.remixMechanic === mechanic) &&
      (!monetization || p.dna?.monetization === monetization)
    );
    setFiltered(result);
  }, [filters, protocols]);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Codex Explorer</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <select onChange={(e) => setFilters({ ...filters, style: e.target.value })} className="bg-gray-800 text-white p-2 rounded">
          <option value="">Style</option>
          <option value="mythpunk">Mythpunk</option>
          <option value="solarpunk">Solarpunk</option>
          <option value="cyberpunk">Cyberpunk</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, mechanic: e.target.value })} className="bg-gray-800 text-white p-2 rounded">
          <option value="">Mechanic</option>
          <option value="ritual">Ritual</option>
          <option value="scarcity">Scarcity</option>
          <option value="time-based">Time-Based</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, monetization: e.target.value })} className="bg-gray-800 text-white p-2 rounded">
          <option value="">Monetization</option>
          <option value="badge-staking">Badge Staking</option>
          <option value="unlockable-lore">Unlockable Lore</option>
          <option value="subscription">Subscription</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <div key={p.id} className="bg-gray-900 p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-400">Epoch: {p.epoch}</p>
            <p className="text-sm italic mb-2">{p.lore}</p>
            <p className="text-xs text-gray-500">Style: {p.dna?.remixStyle} | Mechanic: {p.dna?.remixMechanic} | Monetization: {p.dna?.monetization}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
<Link href={`/spawn/${p.id}`} className="text-indigo-400 underline">View Protocol</Link>
