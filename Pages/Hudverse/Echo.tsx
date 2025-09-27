import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function HUDverseEcho() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase.from('rituals').select('*').order('timestamp', { ascending: true });
      setEvents(data || []);
    };
    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">HUDverse Echo</h1>
      <p className="text-gray-400 mb-4">Replay the entire HUDverse launch as a cinematic scroll.</p>

      <div className="space-y-6 border-l border-yellow-500 pl-6">
        {events.map((e) => (
          <div key={e.id} className="relative">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
            <div className="bg-gray-900 p-4 rounded shadow-lg">
              <h2 className="text-lg font-semibold">{e.scroll_name} → {e.badge_name}</h2>
              <p className="text-sm text-gray-400">{new Date(e.timestamp).toLocaleString()}</p>
              <p className="text-xs italic mt-2">{e.lore || 'No lore attached.'}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
