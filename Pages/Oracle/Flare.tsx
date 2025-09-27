import { useState } from 'react';

export default function OracleFlare() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [flare, setFlare] = useState('');

  const sendFlare = () => {
    if (!recipient || !message) {
      setFlare('⚠️ Enter recipient and message to send a flare.');
      return;
    }
    const encoded = `🚀 Flare to ${recipient}: "${message}" • ${new Date().toLocaleTimeString()}`;
    setFlare(encoded);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Ritual Flare</h1>
      <p className="text-gray-400 mb-4">Send remix signals to other users across epochs.</p>

      <input
        type="text"
        placeholder="Recipient (e.g. @mythkeeper)"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Message (e.g. Omega loop activated)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white mb-4 w-full"
      />
      <button onClick={sendFlare} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800">
        Send Flare
      </button>

      {flare && <p className="mt-6 text-lg italic">{flare}</p>}
    </main>
  );
}
