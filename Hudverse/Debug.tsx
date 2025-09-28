import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function HUDverseDebug() {
  const [status, setStatus] = useState({
    env: false,
    supabase: false,
    rituals: [],
    error: null,
  });

  useEffect(() => {
    const checkSystem = async () => {
      const envOk = Boolean(
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

      const { data, error } = await supabase
        .from('rituals')
        .select('*')
        .limit(3);

      setStatus({
        env: envOk,
        supabase: !error,
        rituals: data || [],
        error: error?.message || null,
      });
    };

    checkSystem();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">HUDverse Debug</h1>
      <div className="space-y-4">
        <div className={`p-4 rounded ${status.env ? 'bg-green-900' : 'bg-red-900'}`}>
          <strong>Environment Variables:</strong> {status.env ? '✅ Loaded' : '❌ Missing'}
        </div>

        <div className={`p-4 rounded ${status.supabase ? 'bg-green-900' : 'bg-red-900'}`}>
          <strong>Supabase Connection:</strong> {status.supabase ? '✅ Connected' : `❌ Error: ${status.error}`}
        </div>

        <div className="p-4 bg-gray-900 rounded">
          <strong>Sample Rituals:</strong>
          <ul className="mt-2 list-disc list-inside">
            {status.rituals.length > 0 ? (
              status.rituals.map((r) => (
                <li key={r.id}>{r.scroll_name} → {r.badge_name}</li>
              ))
            ) : (
              <li>No rituals found</li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
