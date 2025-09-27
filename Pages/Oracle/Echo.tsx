import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function OracleEcho() {
  const [events, setEvents] = useState<any[]>([]);
  const [sound, setSound] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase.from('rituals').select('*').order('timestamp', { ascending: false });
      setEvents(data || []);
    };
    fetchEvents();
  }, []);

  const sonify = (e: any) => {
    if (e.scroll_name.includes('Genesis')) setSound('🔊 Sound: “Initiation pulse activated.”');
    else if (e.scroll_name.includes('Collapse')) setSound('🔊 Sound: “Fracture tone triggered.”');
    else if (e.scroll_name.includes('Omega')) setSound('🔊 Sound: “Recursive loop echoing.”');
    else setSound('🔊 Sound: “Ambient remix resonance.”');
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Echo</h1>
      <p className="text-gray-400 mb-4">Sonify real-time remix activity.</p>

      <div className="space-y-4">
        {events.map((e) => (
          <button key={e.id} onClick={() => sonify(e)} className="bg-gray-900 p-4 rounded w-full text-left hover:bg-gray-800">
            {e.scroll_name} → {e.badge_name}
          </button>
        ))}
      </div>

      {sound && <p className="mt-6 text-lg italic">{sound}</p>}
    </main>
  );
}
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function OracleEcho() {
  const [events, setEvents] = useState<any[]>([]);
  const [sound, setSound] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('rituals')
        .select('*')
        .order('timestamp', { ascending: false });

      if (error) console.error('Error fetching rituals:', error);
      else setEvents(data || []);
    };

    fetchEvents();
  }, []);

  const sonify = (e: any) => {
    if (e.scroll_name.includes('Genesis')) setSound('🔊 Sound: “Initiation pulse activated.”');
    else if (e.scroll_name.includes('Collapse')) setSound('🔊 Sound: “Fracture tone triggered.”');
    else if (e.scroll_name.includes('Omega')) setSound('🔊 Sound: “Recursive loop echoing.”');
    else setSound('🔊 Sound: “Ambient remix resonance.”');
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Echo</h1>
      <p className="text-gray-400 mb-4">Sonify real-time remix activity.</p>

      <div className="space-y-4">
        {events.map((e) => (
          <button key={e.id} onClick={() => sonify(e)} className="bg-gray-900 p-4 rounded w-full text-left hover:bg-gray-800">
            {e.scroll_name} → {e.badge_name}
          </button>
        ))}
      </div>

      {sound && <p className="mt-6 text-lg italic">{sound}</p>}
    </main>
  );
} 
useEffect(() => {
  const channel = supabase
    .channel('rituals-updates')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'rituals' }, (payload) => {
      setEvents((prev) => [payload.new, ...prev]);
    })
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);
