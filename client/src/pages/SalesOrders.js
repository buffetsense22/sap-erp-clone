import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function SalesOrders() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({ customer: '', items: '', total: '' });

  useEffect(() => {
    axios.get(`${API}/sales`).then(res => setOrders(res.data));
  }, []);

  const submit = async e => {
    e.preventDefault();
    const itemList = form.items.split(',').map(name => ({ name, quantity: 1 }));
    const res = await axios.post(`${API}/sales`, {
      ...form,
      items: itemList
    });
    setOrders([...orders, res.data]);
    setForm({ customer: '', items: '', total: '' });
  };

  return (
    <div>
      <h2>Sales Orders</h2>
      <form onSubmit={submit}>
        <input placeholder="Customer" value={form.customer} onChange={e => setForm({ ...form, customer: e.target.value })} />
        <input placeholder="Items (comma-separated)" value={form.items} onChange={e => setForm({ ...form, items: e.target.value })} />
        <input placeholder="Total" value={form.total} onChange={e => setForm({ ...form, total: e.target.value })} />
        <button>Create</button>
      </form>
      <ul>
        {orders.map((o, i) => <li key={i}>{o.customer} - ₱{o.total}</li>)}
      </ul>
    </div>
  );
}
