// Visualize the DNA of any protocol
// Includes remix style, monetization, mutation history, and ritual lineage
import { useState } from 'react';

export default function OracleGenome() {
  const [protocol, setProtocol] = useState('');
  const [dna, setDna] = useState('');

  const visualizeDNA = () => {
    if (!protocol) return setDna('⚠️ Enter a protocol name.');
    setDna(`🧬 DNA of ${protocol} → Style: Ritual • Monetization: Badge-Staking • Mutations: 7 • Lineage: Genesis → Omega`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Protocol Genome</h1>
      <p className="text-gray-400 mb-4">Visualize the DNA of any protocol.</p>

      <input type="text" placeholder="Protocol Name" value={protocol} onChange={(e) => setProtocol(e.target.value)} className="bg-gray-800 p-2 rounded w-full mb-4" />
      <button onClick={visualizeDNA} className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-800">Visualize</button>

      {dna && <p className="mt-6 text-lg italic">{dna}</p>}
    </main>
  );
}
