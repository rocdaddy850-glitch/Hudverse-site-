import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function ScrollFusion() {
  const [scrolls, setScrolls] = useState<any[]>([]);

  useEffect(() => {
    const fetchScrolls = async () => {
      const { data } = await supabase.from('rituals').select('scroll_name, badge_name, epoch');
      setScrolls(data || []);
    };

    fetchScrolls();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Scroll Fusion</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scrolls.map((s, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded">
            <h2 className="text-xl font-semibold">{s.scroll_name}</h2>
            <p className="text-sm">Badge: {s.badge_name}</p>
            <p className="text-sm">Epoch: {s.epoch}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function ScrollFusion() {
  const [scrolls, setScrolls] = useState<any[]>([]);

  useEffect(() => {
    const fetchScrolls = async () => {
      const { data } = await supabase.from('rituals').select('scroll_name, badge_name, epoch');
      setScrolls(data || []);
    };

    fetchScrolls();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Scroll Fusion</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scrolls.map((s, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded">
            <h2 className="text-xl font-semibold">{s.scroll_name}</h2>
            <p className="text-sm">Badge: {s.badge_name}</p>
            <p className="text-sm">Epoch: {s.epoch}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
