// Replay and mutate past remix events
// Users select a ritual and apply mutations to generate new outcomes or lore branches
import { useState } from 'react';

export default function OracleLoop() {
  const [ritual, setRitual] = useState('');
  const [mutation, setMutation] = useState('');
  const [outcome, setOutcome] = useState('');

  const replayRitual = () => {
    if (!ritual || !mutation) {
      setOutcome('⚠️ Select a ritual and mutation level.');
      return;
    }
    setOutcome(`🔁 Replayed ${ritual} with Mutation ${mutation} → New lore branch activated.`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Loop</h1>
      <p className="text-gray-400 mb-4">Replay and mutate past remix events.</p>

      <input type="text" placeholder="Ritual Name" value={ritual} onChange={(e) => setRitual(e.target.value)} className="bg-gray-800 p-2 rounded w-full mb-4" />
      <input type="number" placeholder="Mutation Level" value={mutation} onChange={(e) => setMutation(e.target.value)} className="bg-gray-800 p-2 rounded w-full mb-4" />
      <button onClick={replayRitual} className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-800">Replay</button>

      {outcome && <p className="mt-6 text-lg italic">{outcome}</p>}
    </main>
  );
}
