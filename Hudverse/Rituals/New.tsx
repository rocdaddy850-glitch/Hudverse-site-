import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function NewRitual() {
  const [form, setForm] = useState({
    scroll_name: '',
    badge_name: '',
    epoch: '',
    lore: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from('rituals').insert([form]);
    if (error) {
      console.error('Insert error:', error);
      setStatus('❌ Failed to insert ritual.');
    } else {
      setStatus('✅ Ritual inserted successfully.');
      setForm({ scroll_name: '', badge_name: '', epoch: '', lore: '' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">New Ritual</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input name="scroll_name" value={form.scroll_name} onChange={handleChange} placeholder="Scroll Name" className="w-full p-3 bg-gray-800 rounded" required />
        <input name="badge_name" value={form.badge_name} onChange={handleChange} placeholder="Badge Name" className="w-full p-3 bg-gray-800 rounded" required />
        <input name="epoch" value={form.epoch} onChange={handleChange} placeholder="Epoch" className="w-full p-3 bg-gray-800 rounded" required />
        <textarea name="lore" value={form.lore} onChange={handleChange} placeholder="Lore Fragment" className="w-full p-3 bg-gray-800 rounded" rows={4} />
        <button type="submit" className="bg-green-700 px-6 py-3 rounded hover:bg-green-600">Insert Ritual</button>
      </form>
      {status && <p className="mt-4 text-lg italic">{status}</p>}
    </main>
  );
}
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function NewRitual() {
  const [form, setForm] = useState({
    scroll_name: '',
    badge_name: '',
    epoch: '',
    lore: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from('rituals').insert([form]);
    if (error) {
      console.error('Insert error:', error);
      setStatus('❌ Failed to insert ritual.');
    } else {
      setStatus('✅ Ritual inserted successfully.');
      setForm({ scroll_name: '', badge_name: '', epoch: '', lore: '' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">New Ritual</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input name="scroll_name" value={form.scroll_name} onChange={handleChange} placeholder="Scroll Name" className="w-full p-3 bg-gray-800 rounded" required />
        <input name="badge_name" value={form.badge_name} onChange={handleChange} placeholder="Badge Name" className="w-full p-3 bg-gray-800 rounded" required />
        <input name="epoch" value={form.epoch} onChange={handleChange} placeholder="Epoch" className="w-full p-3 bg-gray-800 rounded" required />
        <textarea name="lore" value={form.lore} onChange={handleChange} placeholder="Lore Fragment" className="w-full p-3 bg-gray-800 rounded" rows={4} />
        <button type="submit" className="bg-green-700 px-6 py-3 rounded hover:bg-green-600">Insert Ritual</button>
      </form>
      {status && <p className="mt-4 text-lg italic">{status}</p>}
    </main>
  );
}
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function NewRitual() {
  const [form, setForm] = useState({
    scroll_name: '',
    badge_name: '',
    epoch: '',
    lore: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('rituals').insert([form]);
    if (error) {
      console.error('Insert error:', error);
      setStatus('❌ Failed to insert ritual.');
    } else {
      setStatus('✅ Ritual inserted successfully.');
      setForm({ scroll_name: '', badge_name: '', epoch: '', lore: '' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">New Ritual</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input name="scroll_name" value={form.scroll_name} onChange={handleChange} placeholder="Scroll Name" className="w-full p-3 bg-gray-800 rounded" required />
        <input name="badge_name" value={form.badge_name} onChange={handleChange} placeholder="Badge Name" className="w-full p-3 bg-gray-800 rounded" required />
        <input name="epoch" value={form.epoch} onChange={handleChange} placeholder="Epoch" className="w-full p-3 bg-gray-800 rounded" required />
        <textarea name="lore" value={form.lore} onChange={handleChange} placeholder="Lore Fragment" className="w-full p-3 bg-gray-800 rounded" rows={4} />
        <button type="submit" className="bg-green-700 px-6 py-3 rounded hover:bg-green-600">Insert Ritual</button>
      </form>
      {status && <p className="mt-4 text-lg italic">{status}</p>}
    </main>
  );
}
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function NewRitual() {
  const [form, setForm] = useState({
    scroll_name: '',
    badge_name: '',
    epoch: '',
    lore: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('rituals').insert([form]);
    if (error) {
      console.error('Insert error:', error);
      setStatus('❌ Failed to insert ritual.');
    } else {
      setStatus('✅ Ritual inserted successfully.');
      setForm({ scroll_name: '', badge_name: '', epoch: '', lore: '' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">New Ritual</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input name="scroll_name" value={form.scroll_name} onChange={handleChange} placeholder="Scroll Name" className="w-full p-3 bg-gray-800 rounded" required />
        <input name="badge_name" value={form.badge_name} onChange={handleChange} placeholder="Badge Name" className="w-full p-3 bg-gray-800 rounded" required />
        <input name="epoch" value={form.epoch} onChange={handleChange} placeholder="Epoch" className="w-full p-3 bg-gray-800 rounded" required />
        <textarea name="lore" value={form.lore} onChange={handleChange} placeholder="Lore Fragment" className="w-full p-3 bg-gray-800 rounded" rows={4} />
        <button type="submit" className="bg-green-700 px-6 py-3 rounded hover:bg-green-600">Insert Ritual</button>
      </form>
      {status && <p className="mt-4 text-lg italic">{status}</p>}
    </main>
  );
}
