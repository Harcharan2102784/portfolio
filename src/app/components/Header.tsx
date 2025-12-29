import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:scale-110 transition-transform cursor-pointer">
          AM
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-gray-400 hover:text-white transition-all duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-sm text-gray-400 hover:text-white transition-all duration-300 relative group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm text-gray-400 hover:text-white transition-all duration-300 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </button>
        </nav>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#14141f]/95 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-3 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-3 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-3 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
