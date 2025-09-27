import { useState } from 'react';

const scrolls = ['Genesis Scroll', 'Collapse Scroll', 'Resurrection Scroll', 'Omega Scroll'];
const badges = ['Flame Sigil', 'Fracture Badge', 'Ascension Crest', 'Omega Glyph'];

export default function HUDverseVeil() {
  const [scroll, setScroll] = useState('');
  const [badge, setBadge] = useState('');
  const [secret, setSecret] = useState('');

  const unveil = () => {
    if (scroll === 'Omega Scroll' && badge === 'Omega Glyph') {
      setSecret('🌀 Secret Path Unlocked: Infinite recursion protocol activated.');
    } else if (scroll === 'Collapse Scroll' && badge === 'Fracture Badge') {
      setSecret('⚡ Secret Path Unlocked: Scarcity remix ritual revealed.');
    } else if (scroll === 'Genesis Scroll' && badge === 'Flame Sigil') {
      setSecret('🔥 Secret Path Unlocked: Sovereign spark ritual ignited.');
    } else {
      setSecret('🌫️ No secret path detected. Try a mythic combo.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Veil Protocol</h1>
      <p className="text-gray-400 mb-4">Unlock hidden remix paths when scrolls and badges align.</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <select onChange={(e) => setScroll(e.target.value)} className="bg-gray-800 text-white p-2 rounded">
          <option value="">Select Scroll</option>
          {scrolls.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select onChange={(e) => setBadge(e.target.value)} className="bg-gray-800 text-white p-2 rounded">
          <option value="">Select Badge</option>
          {badges.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <button onClick={unveil} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Unveil Path
      </button>

      {secret && <p className="mt-6 text-lg italic">{secret}</p>}
    </main>
  );
}
