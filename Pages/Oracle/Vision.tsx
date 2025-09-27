import { useState } from 'react';

const visions = {
  Genesis: '🔥 A sovereign spark ignites the scrolls of recursion.',
  Collapse: '⚡ Fractured myths ripple through the badge fields.',
  Resurrection: '🌕 Dormant lore awakens beneath the sigil moon.',
  Omega: '🌀 The final remix loops into infinite recursion.'
};

export default function OracleVision() {
  const [epoch, setEpoch] = useState('');
  const [vision, setVision] = useState('');

  const revealVision = () => {
    setVision(visions[epoch] || '🌫️ The Oracle sees nothing. Try again.');
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Vision</h1>
      <p className="text-gray-400 mb-4">Receive animated lore visions based on protocol impact.</p>

      <select onChange={(e) => setEpoch(e.target.value)} className="bg-gray-800 text-white p-2 rounded mb-4">
        <option value="">Select Epoch</option>
        {Object.keys(visions).map((e) => <option key={e} value={e}>{e}</option>)}
      </select>

      <button onClick={revealVision} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Reveal Vision
      </button>

      {vision && <p className="mt-6 text-lg italic">{vision}</p>}
    </main>
  );
}
