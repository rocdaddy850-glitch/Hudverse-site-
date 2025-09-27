import { useState } from 'react';

export default function CodexAltar() {
  const [manifesto, setManifesto] = useState('');
  const [reward, setReward] = useState('');

  const stakeManifesto = () => {
    if (!manifesto) return setReward('⚠️ Enter your remix manifesto.');
    setReward(`🧾 Manifesto Staked → Reward: “Lore upgraded • Badge enhanced • Echo triggered”`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Manifesto Altar</h1>
      <p className="text-gray-400 mb-4">Stake your remix manifesto to receive cinematic rewards.</p>

      <textarea placeholder="Enter your remix manifesto…" value={manifesto} onChange={(e) => setManifesto(e.target.value)} className="bg-gray-800 p-4 rounded w-full h-40 mb-4" />
      <button onClick={stakeManifesto} className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-800">Stake Manifesto</button>

      {reward && <p className="mt-6 text-lg italic">{reward}</p>}
    </main>
  );
}
