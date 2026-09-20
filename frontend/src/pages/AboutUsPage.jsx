import React from "react";
// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function AboutUsPage() {
  // Mock Data for Team Members
  const teamMembers = [
    {
      name: "Sarah J.",
      role: "Lead Financial Coach",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Mark T.",
      role: "Senior Wealth Planner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Amara K.",
      role: "Investment Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "David L.",
      role: "Risk Management Expert",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },

    {
      name: "Sarah J.",
      role: "Lead Financial Coach",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Mark T.",
      role: "Senior Wealth Planner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Amara K.",
      role: "Investment Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "David L.",
      role: "Risk Management Expert",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },
    
    
  ];

  return (
    <div className="bg-[#0f1115] min-h-screen text-gray-300 font-sans antialiased selection:bg-[#00f2fe]/30 selection:text-white pt-28 pb-16">
      
      {/* ================= 1. HERO SECTION ================= */}
      <div className="max-w-[1600px] mx-auto px-6 text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] block mb-2">
          About Us
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Helping You Build a Secure Financial Future, Together.
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mx-auto mt-6 rounded-full shadow-[0_0_8px_#00f2fe]" />
      </div>

      {/* ================= 2. MAIN STORY & MISSION GRID (මුල්ම ක්ලීන් ලේඅවුට් එක) ================= */}
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left Side: Professional Image */}
        <div className="lg:col-span-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
            alt="Our Professional Team Working Together"
            className="w-full h-[450px] object-cover rounded-2xl shadow-2xl border border-[#232836] relative z-10"
          />
        </div>

        {/* Right Side: Our Journey & Mission Text */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className="p-6 bg-[#161920]/60 border border-[#232836] rounded-2xl backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#00f2fe] rounded-full inline-block shadow-[0_0_8px_#00f2fe]" />
              Our Journey
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              We founded Kindle Financial Coaching with a vision to empower families and build strong financial foundations. Our dedicated team of specialists works tirelessly to ensure your financial growth. To learn more about how we can guide your journey to financial peace, let's connect and design a customized path forward together.
            </p>
          </div>

          <div className="p-6 bg-[#161920]/60 border border-[#232836] rounded-2xl backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-400 rounded-full inline-block shadow-[0_0_8px_#34d399]" />
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              To provide highly accessible, deeply personalized, and comprehensive financial guidance to individuals and businesses at all stages of life, fostering long-term security and ultimate peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* ================= 3. CORE VALUES SECTION ================= */}
      <div className="bg-[#161920]/40 border-y border-[#232836] py-16 mb-24 backdrop-blur-md shadow-2xl">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 text-center mb-12">
            Our Pillars of Success
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Integrity */}
            <div className="p-6 bg-[#1f242f]/30 border border-[#232836]/60 rounded-2xl flex flex-col items-center hover:border-gray-700 transition duration-300">
              <div className="w-14 h-14 bg-[#00f2fe]/10 text-[#00f2fe] flex items-center justify-center rounded-2xl mb-4 border border-[#00f2fe]/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Integrity</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Transparent and honest guidance built entirely on mutual trust and absolute clarity.
              </p>
            </div>

            {/* Expertise */}
            <div className="p-6 bg-[#1f242f]/30 border border-[#232836]/60 rounded-2xl flex flex-col items-center hover:border-gray-700 transition duration-300">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 flex items-center justify-center rounded-2xl mb-4 border border-emerald-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expertise</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Certified, seasoned professionals bringing decades of strategic insight directly to you.
              </p>
            </div>

            {/* Empathy */}
            <div className="p-6 bg-[#1f242f]/30 border border-[#232836]/60 rounded-2xl flex flex-col items-center hover:border-gray-700 transition duration-300">
              <div className="w-14 h-14 bg-indigo-500/10 text-indigo-400 flex items-center justify-center rounded-2xl mb-4 border border-indigo-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Empathy</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                We genuinely listen to your unique situational goals and financial hurdles with compassion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 4. HORIZONTAL PLATFORM METRICS (යටින් තනි පේළියට) ================= */}
      <div className="max-w-[1600px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="p-6 bg-[#161920]/40 border border-[#232836] rounded-2xl text-center backdrop-blur-md shadow-xl group hover:border-[#00f2fe]/40 transition">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Active Users</p>
            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#00f2fe] transition">1+</h3>
          </div>
          <div className="p-6 bg-[#161920]/40 border border-[#232836] rounded-2xl text-center backdrop-blur-md shadow-xl group hover:border-emerald-500/40 transition">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Total Tracked</p>
            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition">Rs. 1M</h3>
          </div>
          <div className="p-6 bg-[#161920]/40 border border-[#232836] rounded-2xl text-center backdrop-blur-md shadow-xl group hover:border-indigo-500/40 transition">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Budgets Managed</p>
            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-indigo-400 transition">1M</h3>
          </div>
          <div className="p-6 bg-[#161920]/40 border border-[#232836] rounded-2xl text-center backdrop-blur-md shadow-xl group hover:border-[#4facfe]/40 transition">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Savings Optimized</p>
            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#4facfe] transition">21% Avg</h3>
          </div>
        </div>
      </div>

      {/* ================= 5. MEET THE TEAM SECTION (CAROUSEL) ================= */}
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-3xl font-black text-white text-center mb-2 tracking-tight">
          Meet The Team
        </h2>
        <p className="text-gray-400 text-center text-sm mb-12 max-w-md mx-auto">
          The brilliant, certified minds steering your financial success strategy.
        </p>

        <div className="pb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            className="mySwiper !px-4"
          >
            {teamMembers.map((member, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#161920]/80 border border-[#232836] rounded-2xl p-6 text-center shadow-xl hover:border-gray-700 transition-all duration-300 flex flex-col items-center group transform hover:-translate-y-1 backdrop-blur-md">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-[#1f242f] group-hover:border-[#00f2fe] transition duration-300 shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00f2fe] mb-4">
                    {member.role}
                  </p>
                  <button className="text-xs font-bold text-gray-400 group-hover:text-[#00f2fe] transition duration-300 border border-[#232836] rounded-full px-4 py-1.5 bg-[#1f242f]/50 group-hover:bg-[#00f2fe]/10 group-hover:border-[#00f2fe]/30">
                    View Profile
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ================= 6. CALL TO ACTION ================= */}
      <div className="max-w-[1600px] mx-auto px-6 text-center mt-12">
        <button className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-black text-xs px-10 py-4 rounded-xl shadow-lg shadow-[#00f2fe]/10 hover:opacity-90 transition transform active:scale-95 duration-200 uppercase tracking-wider">
          Get in Touch
        </button>
      </div>

    </div>
  );
}

export default AboutUsPage;