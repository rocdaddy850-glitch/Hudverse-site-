import { useState } from 'react';

export default function OracleSigil() {
  const [scroll, setScroll] = useState('');
  const [badge, setBadge] = useState('');
  const [sigil, setSigil] = useState('');

  const revealSigil = () => {
    if (scroll === 'Genesis Scroll' && badge === 'Flame Sigil') {
      setSigil('🔥 Archetype: Sovereign Initiator • Sigil: Flame Glyph');
    } else if (scroll === 'Collapse Scroll' && badge === 'Fracture Badge') {
      setSigil('⚡ Archetype: Scarcity Strategist • Sigil: Fracture Rune');
    } else if (scroll === 'Resurrection Scroll' && badge === 'Ascension Crest') {
      setSigil('🌕 Archetype: Lore Healer • Sigil: Moon Crest');
    } else if (scroll === 'Omega Scroll' && badge === 'Omega Glyph') {
      setSigil('🌀 Archetype: Recursive Architect • Sigil: Infinity Spiral');
    } else {
      setSigil('🌫️ No archetype matched. Try a mythic fusion.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Sigil</h1>
      <p className="text-gray-400 mb-4">Reveal remix archetypes based on scroll-badge fusion.</p>

      <input
        type="text"
        placeholder="Scroll (e.g. Genesis Scroll)"
        value={scroll}
        onChange={(e) => setScroll(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Badge (e.g. Flame Sigil)"
        value={badge}
        onChange={(e) => setBadge(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={revealSigil} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Reveal Sigil
      </button>

      {sigil && <p className="mt-6 text-lg italic">{sigil}</p>}
    </main>
  );
}
