
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { 
    id: '01', 
    question: "How much does it cost?",
    answer: "We offer flexible plans based on call volume and usage — from starter packages for small teams to enterprise-grade solutions. Contact us for a customised quote."
  },
  { 
    id: '02', 
    question: "Does the AI sound robotic?",
    answer: "Not at all. ManPack's AI voice agent is designed to sound natural and human-like. Using advanced voice synthesis and emotion modelling, it adjusts tone, pacing, and energy to create conversations that feel authentic and engaging."
  },
  { 
    id: '03', 
    question: "How long does setup take?",
    answer: "Setup takes less than 10 minutes. Simply upload your lead list, select your script template, and start calling instantly — no technical skills required."
  },
  { 
    id: '04', 
    question: "Why choose AI cold calling?",
    answer: "AI cold calling eliminates repetitive manual work, allowing your sales team to focus on closing deals. It runs 24/7, never forgets follow-ups, and consistently delivers qualified leads at scale."
  },
  { 
    id: '05', 
    question: "Are there industry-specific examples?",
    answer: "Yes. ManPack is used across industries — including insurance, recruitment, education, and finance — helping companies cut up to 70% of their outbound workload."
  },
  { 
    id: '06', 
    question: "Can I customize the script?", 
    answer: "Yes, you have full control over the conversation flow. You can customize scripts, define objection handling rules, and adjust the AI's personality to match your brand's voice perfectly."
  },
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
          {faqs.map((faq) => {
            const isOpen = openItems[faq.id];
            return (
              <div 
                key={faq.id} 
                onClick={() => toggleItem(faq.id)}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer h-fit`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-400 text-sm font-mono pt-1 shrink-0">{faq.id}/</span>
                    <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-[#6200EA]' : 'text-gray-900 group-hover:text-[#6200EA]'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent group-hover:bg-gray-50 transition-colors shrink-0 -mt-2">
                     {isOpen ? (
                        <Minus className="w-6 h-6 text-[#6200EA]" />
                     ) : (
                        <Plus className="w-6 h-6 text-gray-400 group-hover:text-[#6200EA] transition-colors" />
                     )}
                  </div>
                </div>

                {/* Dropdown Answer */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed pl-10 md:pl-11 text-[15px] md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
