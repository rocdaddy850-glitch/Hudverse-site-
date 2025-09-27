import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function OracleThreads() {
  const [threads, setThreads] = useState<any[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const { data } = await supabase.from('rituals').select('*');
      setThreads(data || []);
    };
    fetchThreads();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Threads</h1>
      <p className="text-gray-400 mb-4">Visualize interconnected lore threads across epochs and rituals.</p>

      <div className="space-y-4">
        {threads.map((t) => (
          <div key={t.id} className="bg-gray-900 p-4 rounded shadow-lg border-l-4 border-purple-600">
            <p className="text-lg font-semibold">{t.scroll_name} → {t.badge_name}</p>
            <p className="text-sm text-gray-400">Epoch: {t.epoch || 'Unknown'} • {new Date(t.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
