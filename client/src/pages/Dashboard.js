export default function Dashboard() {
  const role = localStorage.getItem('role');

  return (
    <div>
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
    </div>
  );
}
