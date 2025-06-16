import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

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
