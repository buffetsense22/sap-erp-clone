import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>ERP Dashboard</h1>
      <p>Welcome to your SAP-style ERP system!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
