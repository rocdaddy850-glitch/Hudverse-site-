import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function QuestTracker() {
  const [quests, setQuests] = useState<any[]>([]);

  useEffect(() => {
    const fetchQuests = async () => {
      const { data } = await supabase.from('quests').select('*');
      setQuests(data || []);
    };

    fetchQuests();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Quest Tracker</h1>
      <ul className="space-y-4">
        {quests.map((q) => (
          <li key={q.id} className={`p-4 rounded ${q.status === 'complete' ? 'bg-green-900' : 'bg-gray-900'}`}>
            <strong>{q.title}</strong> — {q.status}
            <p className="text-sm text-gray-400">Reward: {q.reward}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
