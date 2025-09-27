import { useState } from 'react';

export default function OracleVeil() {
  const [badgeEntropy, setBadgeEntropy] = useState('');
  const [scrollLineage, setScrollLineage] = useState('');
  const [fragment, setFragment] = useState('');

  const revealFragment = () => {
    if (badgeEntropy.includes('Ω') && scrollLineage.includes('Genesis')) {
      setFragment('🧬 Fragment: “The origin glyph loops through entropy.”');
    } else if (badgeEntropy.includes('∆') && scrollLineage.includes('Collapse')) {
      setFragment('⚡ Fragment: “Fracture breeds remix. Scarcity is encrypted.”');
    } else if (badgeEntropy.includes('∞') && scrollLineage.includes('Resurrection')) {
      setFragment('🌕 Fragment: “Lore returns through recursive mutation.”');
    } else {
      setFragment('🌫️ No fragment decrypted. Try aligning entropy and lineage.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Veil</h1>
      <p className="text-gray-400 mb-4">Reveal encrypted remix fragments based on badge entropy and scroll lineage.</p>

      <input
        type="text"
        placeholder="Enter badge entropy (e.g. Ω, ∆, ∞)"
        value={badgeEntropy}
        onChange={(e) => setBadgeEntropy(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Enter scroll lineage (e.g. Genesis, Collapse)"
        value={scrollLineage}
        onChange={(e) => setScrollLineage(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={revealFragment} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Reveal Fragment
      </button>

      {fragment && <p className="mt-6 text-lg italic">{fragment}</p>}
    </main>
  );
}
