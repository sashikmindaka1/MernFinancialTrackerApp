import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SpecialGoal() {
  return (
    <div className="min-h-screen bg-[#0f111a] text-white flex flex-col justify-between">


      {/* --- MAIN CONTENT CONTAINER: HANDLES THE GRID & BACKGROUND EFFECTS --- */}
      <div className="flex-grow flex items-center justify-center px-6 py-16 relative overflow-hidden">
        
        {/* Ambient Blurred Background Neon Orbs for UI Depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0072ff]/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Responsive Dual-Column Grid System */}
        {/* Switches to 1 column on mobile and 2 columns on medium screens and up */}
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* ⬅ LEFT COLUMN: MARKETING COPY & CORE VALUE STATEMENT */}
          {/* Automatically hidden on mobile layout views to clean up screen estate */}
          <div className=" space-y-6 text-center md:text-left hidden md:block">
            {/* Context Badge */}
            <div className="inline-block px-3 py-1 bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded-full text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
               Smart Wealth Planning
            </div>
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Visualize Your <br />
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#0072ff] bg-clip-text text-transparent">
                Financial Dreams
              </span>
            </h1>
            {/* Description Paragraph */}
            <p className="text-gray-400 text-base max-w-sm leading-relaxed">
              Setting clear targets is the first step to financial freedom. Define your objectives, track your savings progress, and stay motivated.
            </p>
            
            {/* Quick Metrics Dashboard Preview Showcase */}
            <div className="flex gap-8 pt-4 border-t border-[#23283a] max-w-sm">
              <div>
                <p className="text-2xl font-bold text-[#00e5ff]">0%</p>
                <p className="text-xs text-gray-500 uppercase">Avg. Progress</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Rs. 0</p>
                <p className="text-xs text-gray-500 uppercase">Total Locked</p>
              </div>
            </div>
          </div>

          {/*  RIGHT COLUMN: INTERACTIVE FORM CONTAINER */}
          {/* Uses standard Flex centering hooks to correctly map boundaries across responsive changes */}
          <div className="flex justify-center md:justify-end w-full">
            {/* Translucent Glassmorphic Card Wrapper */}
            <div className="w-full max-w-md bg-[#161924]/60 border border-[#23283a] rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Form Heading & Subtext */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-[#00e5ff] tracking-wide uppercase">
                  Set Future Goals
                </h2>
                <p className="text-xs text-gray-400 mt-2">
                  Plan your goals and start investing in your dreams.
                </p>
              </div>

              {/* Input Form Fields Wrapper */}
              <div className="space-y-5">
                {/* Goal Identification Name Field */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Add your future goal
                  </label>
                  <input 
                    type="text" 
                    placeholder="Name of your dream (e.g. New Laptop)"
                    className="w-full bg-[#0f111a] border border-[#2d3548] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5ff] transition-all"
                  />
                </div>

                {/* Target Capital Accumulation Amount Input Field */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Target Amount
                  </label>
                  <input 
                    type="text" 
                    placeholder="Rs. 12,000"
                    className="w-full bg-[#0f111a] border border-[#2d3548] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5ff] transition-all"
                  />
                </div>

                {/* Primary Action Button */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:opacity-95 active:scale-[0.98] transition-all uppercase tracking-wider text-xs"
                >
                  Start Investing
                </button>
              </div>

              {/* Visual Divider Separator */}
              <div className="border-t border-[#23283a] my-6"></div>

              {/* Secondary Option: Salary Readjustment Navigation Trigger */}
              <div className="text-center">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                  Want to change your salary?
                </h3>
                <button onClick={() =>{

                  window.location.href = '/OnboardingSetupPage'

                }}

                
                  type="button"
                  className="w-full bg-[#1e2332]/50 border border-[#2d3548] text-[#00e5ff] hover:bg-[#00e5ff]/10 font-bold py-3 px-4 rounded-xl transition-all uppercase tracking-wider text-xs"
                >
                  Next
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>


    </div>
  );
}

export default SpecialGoal;