import { useEffect, useState } from 'react';

export default function Manifest() {
  const [manifest, setManifest] = useState<any>(null);

  useEffect(() => {
    fetch('/hudverse.json')
      .then((res) => res.json())
      .then((data) => setManifest(data));
  }, []);

  if (!manifest) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold">Loading Manifest...</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">HUDverse Manifest</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Protocols</h2>
        <ul className="space-y-2">
          {manifest.protocols.map((p: any, i: number) => (
            <li key={i} className="bg-gray-900 p-4 rounded shadow-lg">
              <p><strong>{p.name}</strong> ({p.epoch})</p>
              <p className="text-sm text-gray-400">Style: {p.remixStyle} | Mechanic: {p.mechanic} | Monetization: {p.monetization}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Modules</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {manifest.modules.map((m: string, i: number) => (
            <li key={i} className="bg-gray-800 p-3 rounded text-center">{m}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Endpoints</h2>
        <ul className="space-y-1">
          {Object.entries(manifest.endpoints).map(([key, val]) => (
            <li key={key} className="text-sm text-gray-400">{key}: <code>{val}</code></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
