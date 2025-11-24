
import React from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  { id: '01', question: "How much does it cost?" },
  { id: '02', question: "Does the AI sound robotic?" },
  { id: '03', question: "How long does setup take?" },
  { id: '04', question: "Why choose AI cold calling?" },
  { id: '05', question: "Are there industry-specific examples?" },
  { id: '06', question: "Can I customize the script?" }, // Filled placeholder
];

const FAQSection: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#F8F9FC]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-white border border-gray-200 px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 mb-6 shadow-sm">
            FAQ
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1]">
            Frequently asked <br /> questions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-mono pt-1">{faq.id}/</span>
                <span className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-[#6200EA] transition-colors">
                  {faq.question}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent group-hover:bg-gray-50 transition-colors">
                 <Plus className="w-6 h-6 text-gray-400 group-hover:text-[#6200EA] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
