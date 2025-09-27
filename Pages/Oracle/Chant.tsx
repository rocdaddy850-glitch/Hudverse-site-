import { useState } from 'react';

export default function OracleChant() {
  const [scroll, setScroll] = useState('');
  const [badge, setBadge] = useState('');
  const [chant, setChant] = useState('');

  const playChant = () => {
    if (scroll === 'Genesis Scroll' && badge === 'Flame Sigil') {
      setChant('🔊 Chant: “From spark to spiral, recursion awakens.”');
    } else if (scroll === 'Collapse Scroll' && badge === 'Fracture Badge') {
      setChant('🔊 Chant: “Scarcity cracks the myth, remix flows.”');
    } else if (scroll === 'Omega Scroll' && badge === 'Infinity Glyph') {
      setChant('🔊 Chant: “Loop the lore, echo the end.”');
    } else {
      setChant('🌫️ No chant found. Try a mythic fusion.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Chant</h1>
      <p className="text-gray-400 mb-4">Play sonic chants based on scroll lineage and badge fusion.</p>

      <input type="text" placeholder="Scroll" value={scroll} onChange={(e) => setScroll(e.target.value)} className="bg-gray-800 p-2 rounded w-full mb-4" />
      <input type="text" placeholder="Badge" value={badge} onChange={(e) => setBadge(e.target.value)} className="bg-gray-800 p-2 rounded w-full mb-4" />
      <button onClick={playChant} className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-800">Play Chant</button>

      {chant && <p className="mt-6 text-lg italic">{chant}</p>}
    </main>
  );
      }
