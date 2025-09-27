import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function RitualHeatmap() {
  const [rituals, setRituals] = useState<any[]>([]);
  const [activity, setActivity] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchRituals = async () => {
      const { data } = await supabase.from('rituals').select('*');
      setRituals(data || []);

      const map: Record<string, number> = {};
      data?.forEach((r) => {
        const day = new Date(r.timestamp).toISOString().split('T')[0];
        map[day] = (map[day] || 0) + 1;
      });
      setActivity(map);
    };
    fetchRituals();
  }, []);

  const sortedDays = Object.keys(activity).sort();

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Heatmap</h1>
      <p className="text-gray-400 mb-4">Visualize ritual activity across time.</p>

      <div className="grid grid-cols-7 gap-2">
        {sortedDays.map((day) => {
          const count = activity[day];
          const intensity = Math.min(5, count);
          const bg = [
            'bg-gray-800',
            'bg-purple-700',
            'bg-purple-600',
            'bg-purple-500',
            'bg-yellow-500',
            'bg-red-600'
          ][intensity];

          return (
            <div key={day} className={`${bg} p-4 rounded text-xs text-center`}>
              {day}
              <br />
              {count} 🔥
            </div>
          );
        })}
      </div>
    </main>
  );
}
