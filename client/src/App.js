import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api';

function App() {
  const [partners, setPartners] = useState([]);
  const [form, setForm] = useState({ name: '', type: '', contact: '', address: '' });

  useEffect(() => {
    axios.get(`${API}/partners`).then(res => setPartners(res.data));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(`${API}/partners`, form);
    setPartners([...partners, res.data]);
    setForm({ name: '', type: '', contact: '', address: '' });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Business Partners</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Type" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} />
        <input placeholder="Contact" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} />
        <input placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {partners.map((p, i) => (
          <li key={i}>{p.name} - {p.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
