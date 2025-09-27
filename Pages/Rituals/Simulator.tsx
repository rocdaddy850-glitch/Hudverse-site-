import { useState } from 'react';

export default function RitualSimulator() {
  const [mutationLevel, setMutationLevel] = useState(0);
  const [interactions, setInteractions] = useState(0);
  const [probability, setProbability] = useState<number | null>(null);

  const simulateUnlock = () => {
    const base = mutationLevel * 0.15;
    const bonus = interactions * 0.01;
    const chance = Math.min(1, base + bonus);
    setProbability(chance);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Simulator</h1>
      <p className="text-gray-400 mb-4">Simulate scroll staking and badge unlock probability.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2">Mutation Level</label>
          <input
            type="number"
            value={mutationLevel}
            onChange={(e) => setMutationLevel(Number(e.target.value))}
            className="p-2 rounded bg-gray-800 text-white w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Interactions</label>
          <input
            type="number"
            value={interactions}
            onChange={(e) => setInteractions(Number(e.target.value))}
            className="p-2 rounded bg-gray-800 text-white w-full"
          />
        </div>
      </div>

      <button onClick={simulateUnlock} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Simulate
      </button>

      {probability !== null && (
        <p className="mt-6 text-lg">🔓 Unlock Probability: {(probability * 100).toFixed(2)}%</p>
      )}
    </main>
  );
}
