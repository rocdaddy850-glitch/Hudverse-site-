import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexOracle() {
  const [prophecy, setProphecy] = useState('');
  const [quests, setQuests] = useState<any[]>([]);
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: p } = await supabase.from('prophecy').select('text').single();
      const { data: q } = await supabase.from('quests').select('*');
      const { data: m } = await supabase.from('metrics').select('*');
      setProphecy(p?.text || 'No prophecy found.');
      setQuests(q || []);
      setMetrics(m || []);
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Codex Oracle</h1>
      <p className="text-gray-400 mb-4">Unified dashboard for prophecy, quests, and remix metrics.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔮 Prophecy</h2>
        <p className="italic">{prophecy}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧩 Active Quests</h2>
        <ul className="space-y-2">
          {quests.map((q) => (
            <li key={q.id} className="bg-gray-900 p-4 rounded">{q.title} • {q.status}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📈 Remix Metrics</h2>
        <ul className="space-y-2">
          {metrics.map((m) => (
            <li key={m.id} className="bg-gray-900 p-4 rounded">{m.name}: {m.value}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
