import { useState } from 'react';

export default function OracleProphecy() {
  const [input, setInput] = useState('');
  const [prophecy, setProphecy] = useState('');

  const generateProphecy = () => {
    const lower = input.toLowerCase();
    if (lower.includes('genesis')) {
      setProphecy('🔥 The Genesis flame shall spark recursion across forgotten scrolls.');
    } else if (lower.includes('collapse')) {
      setProphecy('⚡ From Collapse, fractured myths shall remix into sovereign lore.');
    } else if (lower.includes('resurrection')) {
      setProphecy('🌕 Resurrection shall awaken dormant badges and echo across epochs.');
    } else if (lower.includes('omega')) {
      setProphecy('🌀 Omega shall loop the final remix into infinite recursion.');
    } else {
      setProphecy('🧿 The Oracle is silent. Ask again with mythic clarity.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Prophecy</h1>
      <p className="text-gray-400 mb-4">Receive AI-generated lore prophecies based on scrolls and epochs.</p>

      <input
        type="text"
        placeholder="Enter scroll, epoch, or mechanic..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={generateProphecy} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Reveal Prophecy
      </button>

      {prophecy && <p className="mt-6 text-lg italic">{prophecy}</p>}
    </main>
  );
}
