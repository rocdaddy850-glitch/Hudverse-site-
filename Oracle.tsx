import { useState } from 'react';

export default function Oracle() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const askOracle = async () => {
    // Placeholder logic — replace with actual AI call
    const loreMap: Record<string, string> = {
      genesis: 'Genesis marks the sovereign spark of recursion.',
      collapse: 'Collapse is the fracture that births new mythologies.',
      resurrection: 'Resurrection reactivates dormant lore into living protocols.',
      omega: 'Omega is the final remix before the loop begins again.'
    };

    const lower = question.toLowerCase();
    const matched = Object.entries(loreMap).find(([key]) => lower.includes(key));
    setResponse(matched ? matched[1] : 'The Oracle is silent. Ask again with clarity.');
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ask the Oracle</h1>
      <input
        type="text"
        placeholder="What is Resurrection?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={askOracle} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Ask
      </button>
      {response && <p className="mt-6 text-lg italic">{response}</p>}
    </main>
  );
}
