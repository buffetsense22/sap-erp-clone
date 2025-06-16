import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import PurchaseOrder from './pages/PurchaseOrder';
import SalesOrders from './pages/SalesOrders';
import UserRoles from './pages/UserRoles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/purchase-orders" element={<PurchaseOrder />} />
        <Route path="/sales-orders" element={<SalesOrders />} />
        <Route path="/user-roles" element={<UserRoles />} />
      </Routes>
    </Router>
  );
}

export default App;
