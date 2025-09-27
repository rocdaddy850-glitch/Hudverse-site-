import { useState } from 'react';

export default function OracleMirror() {
  const [scrolls, setScrolls] = useState('');
  const [badges, setBadges] = useState('');
  const [identity, setIdentity] = useState('');

  const reflectIdentity = () => {
    if (scrolls.includes('Genesis') && badges.includes('Flame')) {
      setIdentity('🔥 You are a Sovereign Initiator. You spark recursion and awaken dormant lore.');
    } else if (scrolls.includes('Collapse') && badges.includes('Fracture')) {
      setIdentity('⚡ You are a Scarcity Strategist. You remix broken myths into leverage.');
    } else if (scrolls.includes('Resurrection') && badges.includes('Ascension')) {
      setIdentity('🌕 You are a Lore Healer. You revive rituals and evolve badges.');
    } else if (scrolls.includes('Omega') && badges.includes('Glyph')) {
      setIdentity('🌀 You are a Recursive Architect. You loop protocols into infinite myth.');
    } else {
      setIdentity('🌫️ Your remix identity is undefined. Try aligning scrolls and badges.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Mirror</h1>
      <p className="text-gray-400 mb-4">Reflect your remix identity based on scrolls and rituals.</p>

      <input
        type="text"
        placeholder="Enter scrolls (e.g. Genesis, Collapse)"
        value={scrolls}
        onChange={(e) => setScrolls(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Enter badges (e.g. Flame, Fracture)"
        value={badges}
        onChange={(e) => setBadges(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={reflectIdentity} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Reflect Identity
      </button>

      {identity && <p className="mt-6 text-lg italic">{identity}</p>}
    </main>
  );
}
