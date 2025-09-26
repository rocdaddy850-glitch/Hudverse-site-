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
