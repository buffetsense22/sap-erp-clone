import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function PurchaseOrders() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({ supplier: '', items: '', total: '' });

  useEffect(() => {
    axios.get(`${API}/purchase`).then(res => setOrders(res.data));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const newOrder = {
      ...form,
      items: form.items.split(',').map(name => ({ name, quantity: 1 })),
    };
    const res = await axios.post(`${API}/purchase`, newOrder);
    setOrders([...orders, res.data]);
    setForm({ supplier: '', items: '', total: '' });
  };

  return (
    <div>
      <h2>Purchase Orders</h2>
      <form onSubmit={handleSubmit}>
        <input value={form.supplier} onChange={e => setForm({ ...form, supplier: e.target.value })} placeholder="Supplier" />
        <input value={form.items} onChange={e => setForm({ ...form, items: e.target.value })} placeholder="Items (comma separated)" />
        <input value={form.total} onChange={e => setForm({ ...form, total: e.target.value })} placeholder="Total" />
        <button>Add</button>
      </form>

      <ul>
        {orders.map((o, i) => (
          <li key={i}>{o.supplier} - ₱{o.total}</li>
        ))}
      </ul>
    </div>
  );
}
