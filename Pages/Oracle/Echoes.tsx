import { useState } from 'react';

const echoes = {
  Genesis: '🔊 Echo: “The flame awakens recursion.”',
  Collapse: '🔊 Echo: “Fracture breeds remix.”',
  Resurrection: '🔊 Echo: “Lore returns from silence.”',
  Omega: '🔊 Echo: “The loop completes itself.”'
};

export default function OracleEchoes() {
  const [epoch, setEpoch] = useState('');
  const [echo, setEcho] = useState('');

  const playEcho = () => {
    setEcho(echoes[epoch] || '🌫️ No echo found. Try a known epoch.');
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Echoes</h1>
      <p className="text-gray-400 mb-4">Hear past ritual fragments as sonic lore.</p>

      <select onChange={(e) => setEpoch(e.target.value)} className="bg-gray-800 text-white p-2 rounded mb-4">
        <option value="">Select Epoch</option>
        {Object.keys(echoes).map((e) => <option key={e} value={e}>{e}</option>)}
      </select>

      <button onClick={playEcho} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Play Echo
      </button>

      {echo && <p className="mt-6 text-lg italic">{echo}</p>}
    </main>
  );
}
