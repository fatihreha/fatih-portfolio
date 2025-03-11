import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([{ name, email, message }]);
        
      if (error) throw error;
      
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Mesajınız gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">İsim</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-1">Mesajınız</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded h-32"
          required
        />
      </div>
      
      <button 
        type="submit" 
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Gönderiliyor...' : 'Gönder'}
      </button>
      
      {success && (
        <p className="text-green-500">Mesajınız başarıyla gönderildi!</p>
      )}
      
      {error && (
        <p className="text-red-500">{error}</p>
      )}
    </form>
  );
}
