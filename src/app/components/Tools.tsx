export function Tools() {
  const tools = [
    { name: 'Photoshop', category: 'Adobe Suite' },
    { name: 'Illustrator', category: 'Adobe Suite' },
    { name: 'InDesign', category: 'Adobe Suite' },
    { name: 'After Effects', category: 'Adobe Suite' },
    { name: 'Figma', category: 'Design Tools' },
    { name: 'Sketch', category: 'Design Tools' },
    { name: 'Procreate', category: 'Digital Art' },
    { name: 'Blender', category: '3D Design' }
  ];

  const categories = Array.from(new Set(tools.map(t => t.category)));

  return (
    <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            Tools & Skills
          </span>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Professional Toolkit
          </h2>
        </div>
        
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={category}>
              <h3 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {tools
                  .filter(tool => tool.category === category)
                  .map((tool, index) => (
                    <div
                      key={tool.name}
                      className="group px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 cursor-pointer"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        animationDelay: `${(catIndex * 100) + (index * 50)}ms`
                      }}
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
