import { useState } from 'react';

const scrolls = ['Genesis Scroll', 'Collapse Scroll', 'Resurrection Scroll', 'Omega Scroll'];

export default function RemixTemple() {
  const [offering, setOffering] = useState('');
  const [blessing, setBlessing] = useState('');

  const receiveBlessing = () => {
    switch (offering) {
      case 'Genesis Scroll':
        setBlessing('🔥 Blessing: Sovereign spark ignites recursion.');
        break;
      case 'Collapse Scroll':
        setBlessing('⚡ Blessing: Scarcity remix unlocked.');
        break;
      case 'Resurrection Scroll':
        setBlessing('🌕 Blessing: Lore reborn from silence.');
        break;
      case 'Omega Scroll':
        setBlessing('🌀 Blessing: Infinite recursion protocol activated.');
        break;
      default:
        setBlessing('🌫️ No blessing received. Offer a scroll.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Temple</h1>
      <p className="text-gray-400 mb-4">Offer scrolls to receive remix blessings and lore upgrades.</p>

      <select onChange={(e) => setOffering(e.target.value)} className="bg-gray-800 text-white p-2 rounded mb-4">
        <option value="">Select Scroll Offering</option>
        {scrolls.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>

      <button onClick={receiveBlessing} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Receive Blessing
      </button>

      {blessing && <p className="mt-6 text-lg italic">{blessing}</p>}
    </main>
  );
}
