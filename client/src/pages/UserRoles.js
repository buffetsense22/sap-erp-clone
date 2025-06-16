import { useEffect, useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function UserRoles() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${API}/auth/users`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setUsers(res.data));
  }, []);

  const handleRoleChange = async (id, newRole) => {
    const token = localStorage.getItem('token');
    await axios.put(`${API}/auth/users/${id}/role`, { role: newRole }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setUsers(users.map(u => u._id === id ? { ...u, role: newRole } : u));
  };

  return (
    <div>
      <h2>User Role Management</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Current Role</th>
            <th>Change Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.username}</td>
              <td>{u.role}</td>
              <td>
                <select
                  value={u.role}
                  onChange={e => handleRoleChange(u._id, e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="sales">Sales</option>
                  <option value="warehouse">Warehouse</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
