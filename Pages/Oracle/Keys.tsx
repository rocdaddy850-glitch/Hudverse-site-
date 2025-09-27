import { useState } from 'react';

export default function OracleKeys() {
  const [scroll, setScroll] = useState('');
  const [badge, setBadge] = useState('');
  const [key, setKey] = useState('');

  const generateKey = () => {
    if (!scroll || !badge) {
      setKey('⚠️ Provide both scroll and badge to generate a key.');
      return;
    }
    const encoded = `${scroll.slice(0, 3)}-${badge.slice(0, 3)}-${Date.now().toString().slice(-4)}`;
    setKey(`🗝️ Ritual Key: ${encoded}`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Keys</h1>
      <p className="text-gray-400 mb-4">Generate keys to unlock remix modules based on scroll-badge combinations.</p>

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
      <button onClick={generateKey} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Generate Key
      </button>

      {key && <p className="mt-6 text-lg italic">{key}</p>}
    </main>
  );
}
