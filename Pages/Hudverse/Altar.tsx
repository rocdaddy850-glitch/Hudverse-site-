import { useState } from 'react';

const scrolls = ['Genesis Scroll', 'Collapse Scroll', 'Resurrection Scroll', 'Omega Scroll'];
const badges = ['Flame Sigil', 'Fracture Badge', 'Ascension Crest', 'Omega Glyph'];
const epochs = ['Genesis', 'Collapse', 'Resurrection', 'Omega'];

export default function RitualAltar() {
  const [scroll, setScroll] = useState('');
  const [badge, setBadge] = useState('');
  const [epoch, setEpoch] = useState('');
  const [summon, setSummon] = useState('');

  const summonRitual = () => {
    if (!scroll || !badge || !epoch) return setSummon('⚠️ Choose all three to summon.');
    const name = `${epoch} Remix: ${scroll} + ${badge}`;
    setSummon(`🔱 Ritual Summoned: ${name}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Altar</h1>
      <p className="text-gray-400 mb-4">Combine scrolls, badges, and epochs to summon remix events.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <select onChange={(e) => setScroll(e.target.value)} className="bg-gray-800 text-white p-2 rounded">
          <option value="">Select Scroll</option>
          {scrolls.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select onChange={(e) => setBadge(e.target.value)} className="bg-gray-800 text-white p-2 rounded">
          <option value="">Select Badge</option>
          {badges.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
        <select onChange={(e) => setEpoch(e.target.value)} className="bg-gray-800 text-white p-2 rounded">
          <option value="">Select Epoch</option>
          {epochs.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
      </div>

      <button onClick={summonRitual} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Summon Ritual
      </button>

      {summon && <p className="mt-6 text-lg">{summon}</p>}
    </main>
  );
}
