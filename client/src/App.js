import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Sidebar from './Sidebar';

function App() {
  const isLoggedIn = () => !!localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {isLoggedIn() ? (
        <Route path="/" element={<Sidebar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<SalesOrders />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="purchase" element={<PurchaseOrders />} />
          <Route path="/user-roles" element={<UserRoles />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

const isLoggedIn = () => !!localStorage.getItem('token');

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
