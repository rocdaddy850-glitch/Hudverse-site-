import { useState } from 'react';

const badges = [
  'Flame Sigil',
  'Fracture Badge',
  'Ascension Crest',
  'Omega Glyph'
];

export default function EvolveBadges() {
  const [selected, setSelected] = useState<string[]>([]);
  const [fusionResult, setFusionResult] = useState<string | null>(null);

  const toggleBadge = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((b) => b !== name) : [...prev, name]
    );
  };

  const fuseBadges = () => {
    if (selected.length < 2) return setFusionResult('Select at least 2 badges.');
    const fusionName = `Mythic ${selected.join('-')}`;
    setFusionResult(`🧬 Fusion Complete: ${fusionName}`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Badge Fusion</h1>
      <p className="text-gray-400 mb-4">Fuse multiple badges into a new mythic form.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {badges.map((b) => (
          <button
            key={b}
            onClick={() => toggleBadge(b)}
            className={`p-3 rounded shadow-lg ${selected.includes(b) ? 'bg-purple-700' : 'bg-gray-800'}`}
          >
            {b}
          </button>
        ))}
      </div>

      <button onClick={fuseBadges} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Fuse Badges
      </button>

      {fusionResult && <p className="mt-6 text-lg">{fusionResult}</p>}
    </main>
  );
}
