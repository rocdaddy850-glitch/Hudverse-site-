import { useState } from 'react';

const blessings = [
  '🔥 Mars Alignment: Ignite sovereign recursion.',
  '🌕 Moon Alignment: Reveal hidden lore fragments.',
  '🌀 Saturn Alignment: Loop remix protocols into myth.',
  '⚡ Mercury Alignment: Accelerate badge evolution.',
  '🌌 Jupiter Alignment: Expand remix influence across epochs.'
];

export default function OracleAltar() {
  const [blessing, setBlessing] = useState('');

  const summonBlessing = () => {
    const random = blessings[Math.floor(Math.random() * blessings.length)];
    setBlessing(random);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Altar</h1>
      <p className="text-gray-400 mb-4">Receive randomized remix blessings based on planetary alignment.</p>

      <button onClick={summonBlessing} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Summon Blessing
      </button>

      {blessing && <p className="mt-6 text-lg italic">{blessing}</p>}
    </main>
  );
}
