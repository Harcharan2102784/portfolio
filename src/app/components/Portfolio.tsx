import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    // {
    //   id: 1,
    //   title: 'Minimal Brand Identity',
    //   category: 'Branding',
    //   description: 'Complete visual identity system for a sustainable lifestyle brand',
    //   image: 'https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnJhbmRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzY2OTkwNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    // },
    {
      id: 2,
      title: 'Modern App Interface',
      category: 'UI Design',
      description: 'User interface design for a productivity mobile application',
      image: 'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2ODk0OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Editorial Design',
      category: 'Print Design',
      description: 'Magazine layout and typography for quarterly publication',
      // image: 'https://images.unsplash.com/photo-1511499963164-bbacc7bbe9f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludCUyMGRlc2lnbiUyMG1hZ2F6aW5lfGVufDF8fHx8MTc2Njk5MDc3Mnww&ixlib=rb-4.1.0&q=80&w=1080'
      image:'./p1.jpg'
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Visual content strategy and creative assets for product launch',
      image: 'https://images.unsplash.com/photo-1676208973096-026201d7f0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNyZWF0aXZlfGVufDF8fHx8MTc2NjkzMzc2MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    // {
    //   id: 5,
    //   title: 'Creative Workspace',
    //   category: 'Branding',
    //   description: 'Brand identity and environmental graphics for coworking space',
    //   image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjkwOTE1OHww&ixlib=rb-4.1.0&q=80&w=1080'
    // },
    {
      id: 6,
      title: 'Portfolio Showcase',
      category: 'UI Design',
      description: 'Creative portfolio website design with interactive elements',
      image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHdvcmt8ZW58MXx8fHwxNzY2ODgwMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080'
      // image:'/chani.png"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            Selected Works
          </span>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Portfolio
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm aspect-[4/3] mb-6 border border-white/10 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/30" style={{ transformStyle: 'preserve-3d' }}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 3D Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transform group-hover:rotate-12 transition-transform duration-500">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 transform group-hover:translate-x-2 transition-transform duration-300">
                <div className="text-xs uppercase tracking-[0.3em] text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {project.category}
                </div>
                <h3 className="text-xl text-gray-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
