import './LiveUsers.css';

function LiveUsers() {
  // Mock data representing users currently active on the platform
  const activeUsers = [
    { name: "Alex Mercer", location: "United States", transactions: 34, status: "Active" },
    { name: "Saman Kumara", location: "Sri Lanka", transactions: 12, status: "Active" },
    { name: "Chloe Vance", location: "United Kingdom", transactions: 45, status: "Active" },
    { name: "Yuki Tanaka", location: "Japan", transactions: 22, status: "Active" }
  ];

  return (
    <div className="live-users-container">
      <h2 className="section-title">Global Live Platform Activity</h2>
      <p className="section-subtitle">Real-time status of users managing their wealth right now.</p>
      
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Location</th>
              <th>Transactions Logged</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.map((user, index) => (
              <tr key={index}>
                <td className="user-name">{user.name}</td>
                <td>{user.location}</td>
                <td className="tx-count">{user.transactions}</td>
                <td>
                  {/* Glowing active status indicator */}
                  <span className="status-badge">
                    <span className="glow-dot"></span>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiveUsers;