import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function RitualMetrics() {
  const [rituals, setRituals] = useState<any[]>([]);
  const [badgeStats, setBadgeStats] = useState<Record<string, number>>({});
  const [velocity, setVelocity] = useState<number>(0);

  useEffect(() => {
    const fetchRituals = async () => {
      const { data } = await supabase.from('rituals').select('*');
      setRituals(data || []);

      const badgeMap: Record<string, number> = {};
      data?.forEach((r) => {
        badgeMap[r.badge_name] = (badgeMap[r.badge_name] || 0) + 1;
      });
      setBadgeStats(badgeMap);

      const timestamps = data?.map((r) => new Date(r.timestamp).getTime()) || [];
      const sorted = timestamps.sort((a, b) => a - b);
      const timeSpan = sorted.length > 1 ? (sorted[sorted.length - 1] - sorted[0]) / 1000 / 60 : 1;
      setVelocity(data.length / timeSpan); // rituals per minute
    };

    fetchRituals();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Metrics</h1>
      <p className="text-gray-400 mb-4">Live stats on scroll staking, badge unlocks, and remix velocity.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 p-4 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Total Rituals</h2>
          <p className="text-3xl">{rituals.length}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Remix Velocity</h2>
          <p className="text-3xl">{velocity.toFixed(2)} / min</p>
        </div>
        <div className="bg-gray-900 p-4 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Unique Badges</h2>
          <p className="text-3xl">{Object.keys(badgeStats).length}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Badge Unlock Frequency</h2>
      <ul className="space-y-2">
        {Object.entries(badgeStats).map(([badge, count]) => (
          <li key={badge} className="bg-gray-800 p-3 rounded">
            <span className="font-semibold">{badge}</span>: {count} unlocks
          </li>
        ))}
      </ul>
    </main>
  );
}
create table metrics (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  value integer default 0
);
insert into metrics (name, value)
values
('Scrolls Fused', 4),
('Badges Minted', 4),
('Quests Completed', 0);
