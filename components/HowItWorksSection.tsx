
import React from 'react';

const steps = [
  {
    id: 1,
    title: "Upload your leads",
    description: "Simply upload your lead list into ManPack. Then, our platform automatically cleans, organises, and prepares your contacts - so you can begin your cold-calling campaigns in seconds.",
    tags: ["Smart Import", "CRM Integration", "Real-time Lead Cleaning"],
    // Abstract representation of a list/table view
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
  },
  {
    id: 2,
    title: "Our AI makes the calls for you",
    description: "ManPack's AI cold calling bots engages with a Singaporean accent and dials your entire list at scale.",
    tags: ["Natural Conversations", "Multi-language", "Objection Handling"],
    // Abstract representation of a dialer/call screen
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop" 
  },
  {
    id: 3,
    title: "The AI passes the warm leads to you",
    description: "We handle the rejections while you close the sale. Our AI callers delivers you the prospects interested to engage.",
    tags: ["Automatic Scheduling", "Instant Reports", "Human Follow-up"],
    // Abstract representation of leads/kanban
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
  },
  {
    id: 4,
    title: "Your AI gets better after every cold-call campaign.",
    description: "Manpack automatically analyses every conversation - the calls that worked, and the reasons that some didn't. With these insights, you can quickly refine the call script anytime, making the next campaign better than the last.",
    tags: ["Script Optimization", "Auto-Prompt Tuning", "Continuous AI Learning"],
    // Abstract representation of analytics/charts
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop"
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 lg:py-32 px-6 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 lg:mb-32">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-xs font-medium text-gray-300 mb-8">
             Boost your presence
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl">
             How does ManPack work?
          </h2>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-32 lg:gap-40">
           {steps.map((step) => (
              <div key={step.id} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
                 
                 {/* Text Side */}
                 <div className="flex-1 max-w-xl space-y-8">
                    <div className="inline-flex items-center justify-center px-3 py-1 border border-gray-700 rounded-lg text-xs font-mono text-gray-400 bg-black">
                       Step {step.id}
                    </div>
                    
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            {step.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {step.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                       {step.tags.map(tag => (
                          <span key={tag} className="px-4 py-2 bg-gray-900/80 border border-gray-800 rounded-lg text-sm text-gray-300 whitespace-nowrap hover:border-gray-600 transition-colors cursor-default">
                             {tag}
                          </span>
                       ))}
                    </div>
                 </div>
                 
                 {/* Image Side */}
                 <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 aspect-video shadow-2xl group-hover:border-gray-700 transition-colors duration-500">
                        {/* Mock Dashboard UI Overlay */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1a] border-b border-gray-800 flex items-center px-4 gap-2 z-10">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                        
                        {/* Image with overlay for "Dark Mode" effect */}
                        <div className="h-full w-full relative pt-8">
                            <img 
                                src={step.image} 
                                alt={step.title}
                                className="w-full h-full object-cover opacity-80 mix-blend-overlay filter contrast-125 hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                 </div>

              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
