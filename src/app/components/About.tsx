import { Award, Zap } from 'lucide-react';

export function About() {
  const skills = [
    'Graphic Design',
    'Branding & Identity Design',
    'UI/UX Design',
    'Web Design & Prototyping',
    'Typography & Layout Design',
    'Digital & Marketing Creatives',
    'Color Theory & Visual Aesthetics',
    'Client Requirement Analysis'
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#14141f] relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-indigo-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="transform hover:translate-x-2 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-indigo-400" />
              <span className="text-sm uppercase tracking-[0.3em] text-gray-400">
                About Me
              </span>
            </div>
            
            <h2 className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Crafting Visual Stories for Over 1.5 Years
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="hover:text-gray-300 transition-colors">
               I am a creative designer with a strong focus on building visually compelling and purposeful design experiences. With over 1+ years of hands-on experience, I specialize in transforming ideas into clean, engaging, and impactful visual stories across digital and print platforms.
              </p>
              
              <p className="hover:text-gray-300 transition-colors">
              My work spans brand identity, visual design, and creative direction, where I combine strategic thinking with a deep understanding of aesthetics. I have collaborated with startups, agencies, and established businesses, adapting seamlessly to diverse industries and project requirements.
              </p>
              
              <p className="hover:text-gray-300 transition-colors">
              I believe great design is more than appearance—it is clarity, consistency, and communication. My design approach prioritizes simplicity, usability, and timeless appeal, ensuring every project not only looks refined but also delivers measurable value and lasting impact.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 lg:gap-8">
              <div className="group rounded-[15px] p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" style={{ transformStyle: 'preserve-3d' }}>
                <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">1+</div>
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Years Experience</div>
              </div>
              <div className="group rounded-[15px] p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" style={{ transformStyle: 'preserve-3d' }}>
                <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">20+</div>
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Projects Completed</div>
              </div>
              <div className="group rounded-[15px] p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" style={{ transformStyle: 'preserve-3d' }}>
                <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="transform hover:-translate-x-2 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-8">
              <Zap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-2xl text-gray-200">Core Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group p-5 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
