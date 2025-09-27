import { useState } from 'react';

export default function CodexForge() {
  const [scroll, setScroll] = useState('');
  const [mechanic, setMechanic] = useState('');
  const [monetization, setMonetization] = useState('');
  const [crafted, setCrafted] = useState('');

  const forgeProtocol = () => {
    if (!scroll || !mechanic || !monetization) {
      setCrafted('⚠️ Fill all fields to forge a protocol.');
      return;
    }
    const name = `${scroll}-${mechanic}-${monetization}`;
    setCrafted(`⚒️ Protocol Forged: ${name}`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Codex Forge</h1>
      <p className="text-gray-400 mb-4">Craft new remix protocols from scrolls, mechanics, and monetization styles.</p>

      <input
        type="text"
        placeholder="Scroll (e.g. Genesis)"
        value={scroll}
        onChange={(e) => setScroll(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Mechanic (e.g. ritual, scarcity)"
        value={mechanic}
        onChange={(e) => setMechanic(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Monetization (e.g. badge-staking)"
        value={monetization}
        onChange={(e) => setMonetization(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={forgeProtocol} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Forge Protocol
      </button>

      {crafted && <p className="mt-6 text-lg italic">{crafted}</p>}
    </main>
  );
        }
