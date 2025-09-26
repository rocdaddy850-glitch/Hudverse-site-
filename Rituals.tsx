import { useState } from 'react';
import Scroll from '../components/Scroll';
import Badge from '../components/Badge';

type Ritual = {
  scrollName: string;
  lore: string;
  staked: boolean;
  badgeName: string;
  unlocked: boolean;
};

const initialRituals: Ritual[] = [
  {
    scrollName: 'Genesis Scroll',
    lore: 'The first myth, etched in sovereign flame.',
    staked: true,
    badgeName: 'Flame Sigil',
    unlocked: true
  },
  {
    scrollName: 'Collapse Scroll',
    lore: 'Fractured truths waiting to be remixed.',
    staked: false,
    badgeName: 'Fracture Badge',
    unlocked: false
  }
];

export default function Rituals() {
  const [rituals, setRituals] = useState<Ritual[]>(initialRituals);

  const toggleStake = (index: number) => {
    const updated = [...rituals];
    updated[index].staked = !updated[index].staked;
    updated[index].unlocked = updated[index].staked;
    setRituals(updated);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Rituals</h1>
      <p className="text-gray-400 mb-4">Stake scrolls to unlock badges and activate lore-based monetization flows.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rituals.map((r, i) => (
          <div key={i} className="bg-black p-4 rounded shadow-lg">
            <Scroll name={r.scrollName} lore={r.lore} staked={r.staked} />
            <div className="mt-4">
              <Badge name={r.badgeName} mutationLevel={r.unlocked ? 1 : 0} interactions={r.unlocked ? 5 : 0} id={`badge-${i}`} />
              <button
                onClick={() => toggleStake(i)}
                className="mt-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800"
              >
                {r.staked ? 'Unstake Scroll' : 'Stake Scroll'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
