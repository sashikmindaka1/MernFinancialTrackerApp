import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SpecialGoal() {
  return (
    <div className="min-h-screen bg-[#12141c] text-white flex flex-col justify-between">
      {/* Navigation Bar Element */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-[#1a1e29] border border-[#262b3c] rounded-2xl p-8 shadow-2xl">
          
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#00ff66] tracking-wide uppercase">
              Set Future Goals
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Plan your income and start investing in your dreams.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* 1. Salary Input Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider">
                Enter your new salary
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Rs.200,000"
                  className="w-full bg-[#12141c] border border-[#2d3548] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] transition-all"
                />
                <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#00ff66] to-[#00e5ff] text-[#12141c] font-bold py-3.5 px-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all mt-4 uppercase tracking-wider"
            >
              finish
            </button>


              </div>
            </div>



            {/* Visual Divider Line */}
            <div className="border-t border-[#262b3c] my-4"></div>








            {/* 2. Future Goal Section */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider">
                Add your future goal
              </label>
              
              {/* Goal Name Input */}
              <div>
                <input 
                  type="text" 
                  placeholder="name of your dream"
                  className="w-full bg-[#12141c] border border-[#2d3548] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
                />
              </div>

              {/* Goal Target Amount Input */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Target Amount</label>
                <input 
                  type="text" 
                  placeholder="RS.12,000"
                  className="w-full bg-[#12141c] border border-[#2d3548] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
                />
              </div>
            </div>

            {/* Action Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#00ff66] to-[#00e5ff] text-[#12141c] font-bold py-3.5 px-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all mt-4 uppercase tracking-wider"
            >
              Start Investing
            </button>

          </form>
        </div>
      </div>

      {/* Footer Element */}
      <Footer />
    </div>
  );
}

export default SpecialGoal;