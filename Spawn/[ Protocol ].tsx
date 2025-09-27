import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Spawn() {
  const router = useRouter();
  const { protocol } = router.query;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!protocol) return;
    const fetchProtocol = async () => {
      const { data } = await supabase.from('protocols').select('*').eq('id', protocol).single();
      setData(data);
    };
    fetchProtocol();
  }, [protocol]);

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold">Loading Protocol...</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">{data.name}</h1>
      <p className="text-lg mb-6">{data.lore}</p>
      <div className="bg-gray-800 p-4 rounded shadow-lg">
        <p className="text-sm text-gray-400">Epoch: {data.epoch}</p>
        <p className="text-sm text-gray-400">Remix Style: {data.dna?.remixStyle}</p>
        <p className="text-sm text-gray-400">Mechanic: {data.dna?.remixMechanic}</p>
        <p className="text-sm text-gray-400">Monetization: {data.dna?.monetization}</p>
      </div>
    </main>
  );
}
