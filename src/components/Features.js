import './Features.css';

function Features() {
  // Array holding core features for the Personal Finance Tracker
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
    // Main wrapper for the features grid layout
    <div className='features-container'>
      {/* Mapping through the features array to render dynamic cards */}
      {financialFeatures.map((feature, index) => (
        <div className="feature-card" key={index}>
          <h3 className="card-title">{feature.title}</h3>
          <p className="card-desc">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;