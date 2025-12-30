import { Sparkles, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6 transform hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
          <span className="text-sm uppercase tracking-[0.3em] text-gray-400 hover:text-indigo-400 transition-colors">
            Available for Freelance
          </span>
        </div>
        
        <h1 className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200 hover:scale-105 transition-transform duration-500">
          Harcharan Singh
        </h1>
        
        <div className="mb-6 relative inline-block">
          <p className="text-xl md:text-2xl text-gray-300 relative z-10">
            Graphic Designer
          </p>
          <div className="absolute inset-0 blur-xl bg-indigo-500/30 transform scale-150"></div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Creating visual identities that resonate. I transform ideas into compelling designs that elevate brands and drive meaningful engagement.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 border-2 border-indigo-500/50 text-gray-200 hover:bg-indigo-500/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/30"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="group-hover:text-white transition-colors">Get in Touch</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-indigo-400" />
          <div className="w-[2px] h-16 bg-gradient-to-b from-indigo-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
