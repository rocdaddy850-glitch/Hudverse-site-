import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CodexLedger() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchLedger = async () => {
      const { data } = await supabase.from('rituals').select('*').order('timestamp', { ascending: false });
      setTransactions(data || []);
    };
    fetchLedger();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Remix Ledger</h1>
      <p className="text-gray-400 mb-4">Full transaction log across scrolls, badges, and rituals.</p>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-2">Scroll</th>
            <th className="p-2">Badge</th>
            <th className="p-2">Epoch</th>
            <th className="p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-t border-gray-700">
              <td className="p-2">{t.scroll_name}</td>
              <td className="p-2">{t.badge_name}</td>
              <td className="p-2">{t.epoch || 'Unknown'}</td>
              <td className="p-2">{new Date(t.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
