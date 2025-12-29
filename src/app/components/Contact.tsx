import { Mail, Send, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
      <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-indigo-400 animate-pulse" />
            <span className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Get in Touch
            </span>
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2 group-hover:text-indigo-400 transition-colors">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all text-gray-200 hover:bg-white/10 transform hover:scale-[1.02] duration-300"
                required
              />
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2 group-hover:text-indigo-400 transition-colors">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all text-gray-200 hover:bg-white/10 transform hover:scale-[1.02] duration-300"
                required
              />
            </div>
          </div>
          
          <div className="group">
            <label htmlFor="subject" className="block text-sm text-gray-400 mb-2 group-hover:text-indigo-400 transition-colors">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all text-gray-200 hover:bg-white/10 transform hover:scale-[1.02] duration-300"
              required
            />
          </div>
          
          <div className="group">
            <label htmlFor="message" className="block text-sm text-gray-400 mb-2 group-hover:text-indigo-400 transition-colors">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all resize-none text-gray-200 hover:bg-white/10 transform hover:scale-[1.02] duration-300"
              required
            />
          </div>
          
          <button
            type="submit"
            className="group relative w-full md:w-auto px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center gap-2 overflow-hidden transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="relative z-10">Send Message</span>
            <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </form>
        
        <div className="text-center pt-16 border-t border-white/10">
          <p className="text-gray-400 mb-6">
            Connect with me on social media
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 hover:bg-gradient-to-br hover:from-indigo-600/20 hover:to-purple-600/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/30"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
