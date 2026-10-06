import React from 'react';

function LiveUsers() {
  const activeUsers = [
    { name: "Alex Mercer", location: "United States", transactions: 34, status: "Active" },
    { name: "Saman Kumara", location: "Sri Lanka", transactions: 12, status: "Active" },
    { name: "Chloe Vance", location: "United Kingdom", transactions: 45, status: "Active" },
    { name: "Yuki Tanaka", location: "Japan", transactions: 22, status: "Active" }
  ];

  return (
    // Main Container - Dark Background
    <div className="max-w-[1000px] mx-auto py-16 px-4 md:px-8 text-center bg-slate-950 min-h-screen font-sans">
      
      {/* Neon Text Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] mb-2">
        Global Live Platform Activity
      </h2>
      <p className="text-slate-400 text-sm md:text-base mb-10">
        Real-time status of users managing their wealth right now.
      </p>
      
      {/* Table Wrapper with Neon Glow Border */}
      <div className="overflow-x-auto bg-slate-900 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] border border-cyan-900/60">
        <table className="w-full border-collapse text-left whitespace-nowrap">
          <thead>
            <tr>
              <th className="p-4 md:px-6 bg-slate-800/80 text-cyan-400 font-semibold border-b border-cyan-800/50">User Name</th>
              <th className="p-4 md:px-6 bg-slate-800/80 text-cyan-400 font-semibold border-b border-cyan-800/50">Location</th>
              <th className="p-4 md:px-6 bg-slate-800/80 text-cyan-400 font-semibold border-b border-cyan-800/50">Transactions Logged</th>
              <th className="p-4 md:px-6 bg-slate-800/80 text-cyan-400 font-semibold border-b border-cyan-800/50">Status</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.map((user, index) => (
              <tr key={index} className="border-b border-slate-800/60 transition-colors hover:bg-slate-800/50">
                <td className="p-4 md:px-6 font-medium text-slate-100">{user.name}</td>
                <td className="p-4 md:px-6 text-slate-300">{user.location}</td>
                <td className="p-4 md:px-6 font-semibold text-cyan-300">{user.transactions}</td>
                <td className="p-4 md:px-6">
                  
                  {/* Neon Glowing Status Badge */}
                  <span className="inline-flex items-center gap-2 bg-cyan-950/60 text-cyan-400 px-3 py-1.5 rounded-full text-sm font-semibold border border-cyan-800/60 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                    
                    {/* Tailwind Ping Animation (Dot) */}
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_5px_#22d3ee]"></span>
                    </span>
                    
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