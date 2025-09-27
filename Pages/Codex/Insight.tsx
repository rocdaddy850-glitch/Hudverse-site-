import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexInsights() {
  const [protocols, setProtocols] = useState<any[]>([]);
  const [styleMap, setStyleMap] = useState<Record<string, number>>({});
  const [monetizationMap, setMonetizationMap] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchProtocols = async () => {
      const { data } = await supabase.from('protocols').select('*');
      setProtocols(data || []);

      const styleCount: Record<string, number> = {};
      const monetizationCount: Record<string, number> = {};

      data?.forEach((p) => {
        const style = p.dna?.remixStyle || 'unknown';
        const monetization = p.dna?.monetization || 'unknown';
        styleCount[style] = (styleCount[style] || 0) + 1;
        monetizationCount[monetization] = (monetizationCount[monetization] || 0) + 1;
      });

      setStyleMap(styleCount);
      setMonetizationMap(monetizationCount);
    };
    fetchProtocols();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Codex Insights</h1>
      <p className="text-gray-400 mb-4">Analyze remix trends and protocol popularity.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Remix Style Distribution</h2>
        <ul className="space-y-2">
          {Object.entries(styleMap).map(([style, count]) => (
            <li key={style} className="bg-gray-900 p-3 rounded">{style}: {count} protocols</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Monetization Trends</h2>
        <ul className="space-y-2">
          {Object.entries(monetizationMap).map(([type, count]) => (
            <li key={type} className="bg-gray-900 p-3 rounded">{type}: {count} protocols</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
