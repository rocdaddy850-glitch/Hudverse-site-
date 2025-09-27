type ScrollProps = {
  name: string;
  lore: string;
  staked: boolean;
};

export default function Scroll({ name, lore, staked }: ScrollProps) {
  return (
    <div className="border border-yellow-500 rounded-lg p-4 bg-black text-white shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-sm italic mb-2">{lore}</p>
      <p className={`text-sm ${staked ? 'text-green-400' : 'text-red-400'}`}>
        {staked ? 'Staked in Ritual' : 'Unstaked'}
      </p>
    </div>
  );
}
import { useState } from 'react';
import Scroll from '../components/Scroll';

type ScrollType = {
  id: string;
  name: string;
  lore: string;
  staked: boolean;
};

const initialScrolls: ScrollType[] = [
  { id: 's1', name: 'Genesis Scroll', lore: 'The sovereign spark of recursion.', staked: true },
  { id: 's2', name: 'Collapse Scroll', lore: 'Fractured myths awaiting rebirth.', staked: false },
  { id: 's3', name: 'Resurrection Scroll', lore: 'Dormant lore reactivated.', staked: false }
];

export default function Scrolls() {
  const [scrolls, setScrolls] = useState<ScrollType[]>(initialScrolls);

  const toggleStake = (id: string) => {
    const updated = scrolls.map((s) =>
      s.id === id ? { ...s, staked: !s.staked } : s
    );
    setScrolls(updated);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Scrolls</h1>
      <p className="text-gray-400 mb-4">Browse lore-bearing scrolls and stake them to activate rituals.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scrolls.map((s) => (
          <div key={s.id} className="bg-gray-900 p-4 rounded shadow-lg">
            <Scroll name={s.name} lore={s.lore} staked={s.staked} />
            <button
              onClick={() => toggleStake(s.id)}
              className="mt-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800"
            >
              {s.staked ? 'Unstake' : 'Stake'}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
