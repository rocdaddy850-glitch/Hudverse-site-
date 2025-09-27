// Users input fragments
// Oracle reconstructs lost lore, remix ancestry, or badge evolution paths
import { useState } from 'react';

export default function OracleMnemonic() {
  const [fragment, setFragment] = useState('');
  const [reconstruction, setReconstruction] = useState('');

  const recoverLore = () => {
    if (!fragment) return setReconstruction('⚠️ Enter a lore fragment.');
    setReconstruction(`🧠 Reconstructed Lore: “From ${fragment}, the badge evolved through recursion and ritual.”`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Lore Mnemonic</h1>
      <p className="text-gray-400 mb-4">Recover lost lore and remix ancestry.</p>

      <input type="text" placeholder="Lore Fragment" value={fragment} onChange={(e) => setFragment(e.target.value)} className="bg-gray-800 p-2 rounded w-full mb-4" />
      <button onClick={recoverLore} className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-800">Recover</button>

      {reconstruction && <p className="mt-6 text-lg italic">{reconstruction}</p>}
    </main>
  );
}
