import { useState } from 'react';

export default function OracleWhisper() {
  const [mutationLevel, setMutationLevel] = useState(0);
  const [ancestry, setAncestry] = useState('');
  const [whisper, setWhisper] = useState('');

  const generateWhisper = () => {
    if (mutationLevel >= 5 && ancestry.includes('Omega')) {
      setWhisper('🌀 “The final glyph loops back to its origin. Omega remembers.”');
    } else if (mutationLevel >= 3 && ancestry.includes('Collapse')) {
      setWhisper('⚡ “Fractured echoes ripple through forgotten scrolls. Collapse is not the end.”');
    } else if (mutationLevel >= 2 && ancestry.includes('Genesis')) {
      setWhisper('🔥 “The flame that sparked recursion still burns beneath the badge.”');
    } else {
      setWhisper('🌫️ “The Oracle whispers in fragments. Mutation must deepen.”');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Whisper</h1>
      <p className="text-gray-400 mb-4">Receive cryptic lore fragments based on badge mutations and remix ancestry.</p>

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
          <label className="block mb-2">Remix Ancestry</label>
          <input
            type="text"
            value={ancestry}
            onChange={(e) => setAncestry(e.target.value)}
            placeholder="e.g. Genesis, Collapse, Omega"
            className="p-2 rounded bg-gray-800 text-white w-full"
          />
        </div>
      </div>

      <button onClick={generateWhisper} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Whisper
      </button>

      {whisper && <p className="mt-6 text-lg italic">{whisper}</p>}
    </main>
  );
}
