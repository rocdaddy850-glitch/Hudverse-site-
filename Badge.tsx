type BadgeProps = {
  name: string;
  mutationLevel: number;
  interactions: number;
};

export default function Badge({ name, mutationLevel, interactions }: BadgeProps) {
  const glow = mutationLevel > 3 ? 'animate-pulse border-purple-500' : 'border-gray-600';

  return (
    <div className={`border-2 rounded-lg p-4 bg-gray-900 text-white shadow-md ${glow}`}>
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-400">Mutation Level: {mutationLevel}</p>
      <p className="text-sm text-gray-400">Interactions: {interactions}</p>
    </div>
  );
}
const glow = mutationLevel > 3
  ? 'border-purple-500 shadow-purple-500/50 animate-pulse'
  : 'border-gray-600';
import Badge from '../components/Badge';

const badges = [
  { id: 'b1', name: 'Flame Sigil', mutationLevel: 4, interactions: 27 },
  { id: 'b2', name: 'Fracture Badge', mutationLevel: 2, interactions: 12 },
  { id: 'b3', name: 'Ascension Crest', mutationLevel: 5, interactions: 40 }
];

export default function Badges() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Badges</h1>
      <p className="text-gray-400 mb-4">Visualize badge evolution across epochs and rituals.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {badges.map((b) => (
          <Badge key={b.id} id={b.id} name={b.name} mutationLevel={b.mutationLevel} interactions={b.interactions} />
        ))}
      </div>
    </main>
  );
}
