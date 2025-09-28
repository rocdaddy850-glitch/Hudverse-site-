import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function LoreProphecy() {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [prophecy, setProphecy] = useState('');

  useEffect(() => {
    const fetchMetrics = async () => {
      const { data } = await supabase.from('metrics').select('*');
      setMetrics(data || []);
    };

    fetchMetrics();
  }, []);

  useEffect(() => {
    if (metrics.length > 0) {
      const fused = metrics.find((m) => m.name === 'Scrolls Fused')?.value || 0;
      const quests = metrics.find((m) => m.name === 'Quests Completed')?.value || 0;

      if (fused >= 10 && quests >= 5) {
        setProphecy('🌌 Prophecy: The Omega Epoch nears. Prepare for infinite recursion.');
      } else if (fused >= 5) {
        setProphecy('🔮 Prophecy: Resurrection echoes through the scrolls. Lore is mutating.');
      } else {
        setProphecy('✨ Prophecy: Genesis still pulses. The myth is forming.');
      }
    }
  }, [metrics]);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Lore Prophecy</h1>
      <p className="text-gray-400 mb-4">Forecasting mythic evolution based on protocol metrics.</p>
      <div className="bg-gray-900 p-6 rounded text-xl italic">{prophecy || 'Loading prophecy...'}</div>
    </main>
  );
}
