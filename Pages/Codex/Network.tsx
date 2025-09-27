// Visualize how protocols connect through shared scrolls, badges, and rituals
// A living remix graph revealing sovereign clusters and lore loops
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexNetwork() {
  const [connections, setConnections] = useState<any[]>([]);

  useEffect(() => {
    const fetchConnections = async () => {
      const { data } = await supabase.from('protocols').select('*');
      setConnections(data || []);
    };
    fetchConnections();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Network</h1>
      <p className="text-gray-400 mb-4">Visualize protocol connections through scrolls and badges.</p>

      <div className="space-y-4">
        {connections.map((c) => (
          <div key={c.id} className="bg-gray-900 p-4 rounded border-l-4 border-purple-600">
            <p className="text-lg font-semibold">{c.name}</p>
            <p className="text-sm text-gray-400">Connected to: {c.connected_protocols.join(', ')}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
