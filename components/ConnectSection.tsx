import React from 'react';

const ConnectSection: React.FC = () => {
  return (
    <section className="bg-black w-full py-24 px-6 flex flex-col items-center justify-center border-t border-gray-900">
      <h2 className="text-5xl font-bold text-white mb-12 tracking-tight text-center">Connect Us</h2>
      
      <div className="w-full max-w-3xl border border-gray-800 rounded-xl p-6 md:p-8 bg-black">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block pl-1">First Name</label>
              <input 
                type="text" 
                placeholder="Jane"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6200EA] focus:ring-1 focus:ring-[#6200EA] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block pl-1">Last Name</label>
              <input 
                type="text" 
                placeholder="Smith"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6200EA] focus:ring-1 focus:ring-[#6200EA] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block pl-1">Email</label>
              <input 
                type="email" 
                placeholder="Jane@manpack.sg"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6200EA] focus:ring-1 focus:ring-[#6200EA] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block pl-1">Phone</label>
              <input 
                type="tel" 
                placeholder="+65 819-8061"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6200EA] focus:ring-1 focus:ring-[#6200EA] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm font-medium block pl-1">Message</label>
            <textarea 
              rows={4}
              placeholder="Hi, I am jane i want help with...."
              className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6200EA] focus:ring-1 focus:ring-[#6200EA] transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#6200EA] hover:bg-[#5000c2] text-white font-bold py-3.5 rounded-lg transition-all shadow-lg hover:shadow-purple-500/20 active:scale-[0.99] mt-4"
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConnectSection;