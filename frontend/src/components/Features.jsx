import React from 'react';

function Features() {
  const financialFeatures = [
    {
      title: "Real-Time Tracking",
      desc: "Effortlessly log your daily income and expenses under smart categories within seconds."
    },
    {
      title: "Smart Budgeting",
      desc: "Set monthly spending limits for various categories and receive instant alerts before you overspend."
    },
    {
      title: "Advanced Analytics",
      desc: "Visualize your financial habits with dynamic pie charts and graphs to identify where your money goes."
    },
    {
      title: "Bank-Grade Security",
      desc: "Your transactions and personal financial statements are protected with robust end-to-end encryption."
    }
  ];

  return (
    // Main Container - Dark Background
    <div className="flex flex-wrap justify-center gap-8 py-16 px-8 bg-slate-950 min-h-screen">
      
      {financialFeatures.map((feature, index) => (
        // Feature Card - Dark Theme with Neon Hover Effects
        <div 
          key={index} 
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-[280px] flex-[1_1_250px] 
                     transition-all duration-300 ease-out 
                     hover:-translate-y-2 hover:bg-slate-800/80 hover:border-cyan-500 
                     hover:shadow-[0_12px_24px_rgba(34,211,238,0.25)]"
        >
          {/* Card Title - Neon Cyan */}
          <h3 className="text-cyan-400 text-xl font-semibold mt-0 mb-3 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            {feature.title}
          </h3>
          
          {/* Card Description - Light Slate */}
          <p className="text-slate-400 text-[0.95rem] leading-relaxed m-0">
            {feature.desc}
          </p>
        </div>
      ))}
      
    </div>
  );
}

export default Features;