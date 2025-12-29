import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Alex transformed our brand identity with exceptional creativity and professionalism. The results exceeded our expectations and truly captured our vision.",
      author: "Sarah Chen",
      role: "CEO, TechStart",
      company: "Technology Startup",
      rating: 5
    },
    {
      id: 2,
      quote: "Working with Alex was a seamless experience. Their attention to detail and ability to translate abstract ideas into stunning visuals is remarkable.",
      author: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "Wellness Co.",
      rating: 5
    },
    {
      id: 3,
      quote: "The UI designs delivered were not only beautiful but highly functional. Alex understands the balance between aesthetics and user experience perfectly.",
      author: "Emily Watson",
      role: "Product Manager",
      company: "FinTech Solutions",
      rating: 5
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-[#14141f] to-[#0a0a0f] relative">
      <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            Client Feedback
          </span>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Testimonials
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/30 cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-10 h-10 text-indigo-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-indigo-400 fill-indigo-400 transform group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed italic group-hover:text-white transition-colors">
                "{testimonial.quote}"
              </p>
              
              <div className="pt-6 border-t border-white/10 group-hover:border-indigo-500/30 transition-colors">
                <div className="text-gray-200 mb-1 group-hover:text-white transition-colors">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {testimonial.role}
                </div>
                <div className="text-sm text-gray-500 group-hover:text-indigo-400 transition-colors">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
