import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div>
      <h1>ERP Dashboard</h1>
      <p>Welcome to your SAP-style ERP system!</p>

      <h2>Dashboard ({role})</h2>

      {role === 'admin' && (
        <div>
          <p>Welcome Admin!</p>
          <p>You can manage all ERP modules and assign roles.</p>
        </div>
      )}
      {role === 'sales' && (
        <div>
          <p>Welcome Sales User!</p>
          <p>Go to Sales Orders to manage transactions.</p>
        </div>
      )}
      {role === 'warehouse' && (
        <div>
          <p>Welcome Warehouse Staff!</p>
          <p>Go to Inventory or Purchase Orders for stock handling.</p>
        </div>
      )}

      <button onClick={logout}>Logout</button>
    </div>
  );
}
