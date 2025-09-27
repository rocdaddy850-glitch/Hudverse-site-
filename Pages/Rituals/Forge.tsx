import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Forge() {
  const [scrollName, setScrollName] = useState('');
  const [badgeName, setBadgeName] = useState('');
  const [lore, setLore] = useState('');
  const [status, setStatus] = useState('');

  const mintRitual = async () => {
    const { error } = await supabase.from('rituals').insert([{
      scroll_name: scrollName,
      badge_name: badgeName,
      staked: true,
      unlocked: true,
      timestamp: new Date().toISOString()
    }]);

    if (error) {
      setStatus('❌ Failed to mint ritual.');
    } else {
      setStatus('✅ Ritual minted successfully.');
      setScrollName('');
      setBadgeName('');
      setLore('');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Forge Ritual</h1>
      <p className="text-gray-400 mb-4">Combine scrolls and badges to mint new rituals into the HUDverse.</p>

      <input
        type="text"
        placeholder="Scroll Name"
        value={scrollName}
        onChange={(e) => setScrollName(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Badge Name"
        value={badgeName}
        onChange={(e) => setBadgeName(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <textarea
        placeholder="Lore Fragment"
        value={lore}
        onChange={(e) => setLore(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full h-32"
      />
      <button onClick={mintRitual} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Mint Ritual
      </button>

      {status && <p className="mt-4 text-lg">{status}</p>}
    </main>
  );
}
