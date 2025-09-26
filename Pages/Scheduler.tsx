import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Scheduler() {
  const [name, setName] = useState('');
  const [epoch, setEpoch] = useState('');
  const [launchTime, setLaunchTime] = useState('');

  const scheduleRemix = async () => {
    const { error } = await supabase.from('protocols').insert([{
      name,
      epoch,
      lore: `Scheduled remix of ${name} from ${epoch} epoch.`,
      dna: {
        remixStyle: 'mythpunk',
        remixMechanic: 'ritual',
        monetization: 'badge-staking'
      },
      launch_at: launchTime
    }]);

    if (error) console.error('Error scheduling remix:', error);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Scheduler</h1>
      <input
        type="text"
        placeholder="Protocol Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Epoch"
        value={epoch}
        onChange={(e) => setEpoch(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="datetime-local"
        value={launchTime}
        onChange={(e) => setLaunchTime(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={scheduleRemix} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Schedule Remix
      </button>
    </main>
  );
}
