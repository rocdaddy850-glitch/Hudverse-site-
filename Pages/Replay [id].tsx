import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Replay() {
  const router = useRouter();
  const { id } = router.query;
  const [protocol, setProtocol] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProtocol = async () => {
      const { data } = await supabase.from('protocols').select('*').eq('id', id).single();
      setProtocol(data);
    };
    fetchProtocol();
  }, [id]);

  if (!protocol) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold">Loading Replay...</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">{protocol.name}</h1>
      <p className="text-lg mb-6">{protocol.lore}</p>
      <div className="bg-gray-800 p-4 rounded shadow-lg">
        <p className="text-sm text-gray-400">Epoch: {protocol.epoch}</p>
        <p className="text-sm text-gray-400">Remix Style: {protocol.dna?.remixStyle}</p>
        <p className="text-sm text-gray-400">Mechanic: {protocol.dna?.remixMechanic}</p>
        <p className="text-sm text-gray-400">Monetization: {protocol.dna?.monetization}</p>
      </div>
    </main>
  );
}
