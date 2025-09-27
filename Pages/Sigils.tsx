const sigils = [
  { name: 'Genesis', image: '/sigils/genesis.png', meaning: 'Origin of mythic recursion' },
  { name: 'Collapse', image: '/sigils/collapse.png', meaning: 'Fracture and rebirth' },
  { name: 'Resurrection', image: '/sigils/resurrection.png', meaning: 'Lore reactivation' },
  { name: 'Omega', image: '/sigils/omega.png', meaning: 'Final remix before recursion' }
];

export default function Sigils() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Protocol Sigils</h1>
      <p className="text-gray-400 mb-4">Visual glyphs representing each HUDverse epoch.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sigils.map((s) => (
          <div key={s.name} className="bg-gray-900 p-4 rounded shadow-lg text-center hover:scale-105 transition-all">
            <img src={s.image} alt={s.name} className="w-24 h-24 mx-auto mb-2" />
            <h2 className="text-lg font-semibold">{s.name}</h2>
            <p className="text-sm text-gray-400">{s.meaning}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
