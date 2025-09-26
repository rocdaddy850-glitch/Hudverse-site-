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
