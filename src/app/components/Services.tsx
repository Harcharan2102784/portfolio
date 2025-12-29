import { Palette, LayoutGrid, Printer, Share2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Branding',
      description: 'Complete brand identity systems including logo design, color palettes, typography, and brand guidelines.'
    },
    {
      icon: LayoutGrid,
      title: 'UI Design',
      description: 'User-centered interface design for web and mobile applications with focus on usability and aesthetics.'
    },
    {
      icon: Printer,
      title: 'Print Design',
      description: 'Editorial layouts, packaging design, posters, and all print collateral with attention to production details.'
    },
    {
      icon: Share2,
      title: 'Social Media Creatives',
      description: 'Eye-catching visual content for social platforms that drives engagement and strengthens brand presence.'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-gradient-to-b from-[#14141f] to-[#0a0a0f] relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 w-1/3 h-1/3 bg-indigo-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            What I Do
          </span>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Services
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 lg:p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/30 cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 inline-block">
                <div className="p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/30 group-hover:border-indigo-400/60">
                  <service.icon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300" />
                </div>
              </div>
              <h3 className="text-xl mb-4 text-gray-200 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              
              {/* Accent line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
