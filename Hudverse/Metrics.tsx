import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function HUDverseMetrics() {
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      const { data, error } = await supabase.from('metrics').select('*');
      if (error) console.error('Error fetching metrics:', error);
      else setMetrics(data || []);
    };

    fetchMetrics();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">HUDverse Metrics</h1>
      <p className="text-gray-400 mb-4">Live protocol stats and lore activity.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m) => (
          <div key={m.id} className="bg-gray-900 p-6 rounded shadow">
            <h2 className="text-xl font-semibold">{m.name}</h2>
            <p className="text-3xl mt-2">{m.value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function HUDverseMetrics() {
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      const { data, error } = await supabase.from('metrics').select('*');
      if (error) console.error('Error fetching metrics:', error);
      else setMetrics(data || []);
    };

    fetchMetrics();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">HUDverse Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m) => (
          <div key={m.id} className="bg-gray-900 p-6 rounded shadow">
            <h2 className="text-xl font-semibold">{m.name}</h2>
            <p className="text-3xl mt-2">{m.value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
