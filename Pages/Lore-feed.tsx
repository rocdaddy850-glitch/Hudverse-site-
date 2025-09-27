import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Ritual = {
  id: string;
  scroll_name: string;
  badge_name: string;
  staked: boolean;
  unlocked: boolean;
  timestamp: string;
};

export default function LoreFeed() {
  const [rituals, setRituals] = useState<Ritual[]>([]);

  useEffect(() => {
    const fetchRituals = async () => {
      const { data } = await supabase.from('rituals').select('*').order('timestamp', { ascending: false });
      setRituals(data || []);
    };

    fetchRituals();

    const channel = supabase
      .channel('rituals-feed')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'rituals' }, (payload) => {
        setRituals((prev) => [payload.new as Ritual, ...prev]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Lore Feed</h1>
      <p className="text-gray-400 mb-4">Live ritual events from across the HUDverse.</p>
      <ul className="space-y-4">
        {rituals.map((r) => (
          <li key={r.id} className="bg-gray-900 p-4 rounded shadow-lg">
            <p className="text-lg font-semibold">{r.scroll_name}</p>
            <p className="text-sm text-gray-400">→ {r.badge_name} {r.unlocked ? '🔓' : '🔒'}</p>
            <p className="text-xs text-gray-500">Staked: {r.staked ? 'Yes' : 'No'} | {new Date(r.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );<li key={r.id} className="bg-gray-900 p-4 rounded shadow-lg transition-all duration-500 hover:scale-105 hover:border-yellow-500 border border-transparent">
  <p className="text-lg font-semibold animate-pulse">{r.scroll_name}</p>
  <p className="text-sm text-gray-400">→ {r.badge_name} {r.unlocked ? '🔓' : '🔒'}</p>
  <p className="text-xs text-gray-500">Staked: {r.staked ? 'Yes' : 'No'} | {new Date(r.timestamp).toLocaleString()}</p>
</li>
}
