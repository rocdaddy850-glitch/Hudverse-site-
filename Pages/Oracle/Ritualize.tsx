import { useState } from 'react';

export default function OracleRitualize() {
  const [phrase, setPhrase] = useState('');
  const [incantation, setIncantation] = useState('');

  const ritualize = () => {
    if (!phrase) return setIncantation('⚠️ Enter a phrase to ritualize.');
    const words = phrase.split(' ').map((w) => `✶ ${w.toUpperCase()} ✶`);
    const chant = words.join(' • ');
    setIncantation(`🔮 Incantation:\n${chant}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Oracle Ritualizer</h1>
      <p className="text-gray-400 mb-4">Transform any phrase into a ritual incantation.</p>

      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="e.g. collapse into recursion"
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={ritualize} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Ritualize
      </button>

      {incantation && (
        <pre className="mt-6 text-lg whitespace-pre-wrap">{incantation}</pre>
      )}
    </main>
  );
}
