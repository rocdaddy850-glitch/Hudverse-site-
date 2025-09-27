import { useState } from 'react';

const quests = [
  {
    id: 'q1',
    title: 'Ignite Genesis',
    description: 'Stake the Genesis Scroll and unlock the Flame Sigil.',
    completed: false
  },
  {
    id: 'q2',
    title: 'Collapse Recovery',
    description: 'Unstake Collapse Scroll and remix it with Resurrection lore.',
    completed: false
  },
  {
    id: 'q3',
    title: 'Omega Loop',
    description: 'Trigger a ritual with Omega Scroll and Ascension Crest.',
    completed: false
  }
];

export default function RitualQuests() {
  const [questState, setQuestState] = useState(quests);

  const completeQuest = (id: string) => {
    const updated = questState.map((q) =>
      q.id === id ? { ...q, completed: true } : q
    );
    setQuestState(updated);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Quests</h1>
      <p className="text-gray-400 mb-4">Complete lore-based quests to evolve badges and unlock new remix paths.</p>

      <ul className="space-y-4">
        {questState.map((q) => (
          <li key={q.id} className={`p-4 rounded shadow-lg ${q.completed ? 'bg-green-800' : 'bg-gray-900'}`}>
            <h2 className="text-xl font-semibold">{q.title}</h2>
            <p className="text-sm text-gray-400">{q.description}</p>
            {!q.completed && (
              <button
                onClick={() => completeQuest(q.id)}
                className="mt-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800"
              >
                Complete Quest
              </button>
            )}
            {q.completed && <p className="mt-2 text-green-300">✅ Completed</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
create table quests (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  status text default 'active',
  reward text
);
