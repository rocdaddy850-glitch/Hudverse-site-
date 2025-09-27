import { useState } from 'react';

export default function DynamicAltar() {
  const [planet, setPlanet] = useState('');
  const [mutation, setMutation] = useState('');
  const [response, setResponse] = useState('');

  const activateAltar = () => {
    if (planet === 'Saturn' && mutation >= '5') {
      setResponse('🌀 Saturn + Mutation 5 → Infinite recursion protocol unlocked.');
    } else if (planet === 'Moon' && mutation >= '3') {
      setResponse('🌕 Moon + Mutation 3 → Lore fragment revealed.');
    } else if (planet === 'Mars' && mutation >= '2') {
      setResponse('🔥 Mars + Mutation 2 → Sovereign remix blessing granted.');
    } else {
      setResponse('🌫️ No alignment detected. Try different planetary-mutation combo.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Planetary Remix Altar</h1>
      <p className="text-gray-400 mb-4">Responds to planetary cycles and badge mutations.</p>

      <input
        type="text"
        placeholder="Planet (e.g. Saturn)"
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="number"
        placeholder="Mutation Level (e.g. 3)"
        value={mutation}
        onChange={(e) => setMutation(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={activateAltar} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Activate Altar
      </button>

      {response && <p className="mt-6 text-lg italic">{response}</p>}
    </main>
  );
}
