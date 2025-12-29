export function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0a0a0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
            © 2025 Alex Morrison. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-all duration-300 relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-all duration-300 relative group">
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
