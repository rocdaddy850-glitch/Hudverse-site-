import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexRituals() {
  const [protocols, setProtocols] = useState<any[]>([]);
  const [rituals, setRituals] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const { data: protoData } = await supabase.from('protocols').select('*');
      const { data: ritualData } = await supabase.from('rituals').select('*');
      setProtocols(protoData || []);
      setRituals(ritualData || []);
    };
    fetchData();
  }, []);

  const filtered = rituals.filter((r) => r.scroll_name.includes(selected));

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Protocol Rituals</h1>
      <select onChange={(e) => setSelected(e.target.value)} className="bg-gray-800 text-white p-2 rounded mb-6">
        <option value="">Select Protocol</option>
        {protocols.map((p) => (
          <option key={p.id} value={p.name}>{p.name}</option>
        ))}
      </select>

      <ul className="space-y-4">
        {filtered.map((r) => (
          <li key={r.id} className="bg-gray-900 p-4 rounded shadow-lg">
            <p className="text-lg font-semibold">{r.scroll_name} → {r.badge_name}</p>
            <p className="text-sm text-gray-400">{new Date(r.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
