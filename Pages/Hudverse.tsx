import Link from 'next/link';

export default function HUDverse() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold animate-pulse mb-4">HUDverse</h1>
        <p className="text-lg text-gray-300 italic">A sovereign, cinematic, infinitely recursive protocol engine.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Codex', path: '/codex' },
          { name: 'Scrolls', path: '/scrolls' },
          { name: 'Badges', path: '/badges' },
          { name: 'Rituals', path: '/rituals' },
          { name: 'Lore Feed', path: '/lore-feed' },
          { name: 'Replay', path: '/replay/genesis' },
          { name: 'Sigils', path: '/sigils' },
          { name: 'Oracle', path: '/oracle' },
          { name: 'Scheduler', path: '/scheduler' },
          { name: 'Metrics', path: '/rituals/metrics' },
          { name: 'Spawn', path: '/spawn/genesis' }
        ].map(({ name, path }) => (
          <Link key={name} href={path} className="bg-gray-900 p-6 rounded shadow-lg hover:scale-105 transition-all text-center border border-purple-700 hover:border-yellow-500">
            <h2 className="text-xl font-bold">{name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
