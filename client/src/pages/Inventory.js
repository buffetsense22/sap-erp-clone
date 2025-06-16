import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', sku: '', quantity: '', price: '' });

  useEffect(() => {
    axios.get(`${API}/inventory`).then(res => setItems(res.data));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(`${API}/inventory`, form);
    setItems([...items, res.data]);
    setForm({ name: '', sku: '', quantity: '', price: '' });
  };

  return (
    <div>
      <h2>Inventory</h2>
      <form onSubmit={handleSubmit}>
        <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Item Name" />
        <input value={form.sku} onChange={e => setForm({ ...form, sku: e.target.value })} placeholder="SKU" />
        <input value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} placeholder="Quantity" />
        <input value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="Price" />
        <button>Add</button>
      </form>

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.name} ({item.sku}) - Qty: {item.quantity}, ₱{item.price}</li>
        ))}
      </ul>
    </div>
  );
}
