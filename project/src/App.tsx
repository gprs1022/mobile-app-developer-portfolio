import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { PublishedApps } from './components/PublishedApps';
import { OngoingProjects } from './components/OngoingProjects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Achievements } from './components/Achievements';
import { AppMockups } from './components/AppMockups';
import { AppDevSeries } from './components/AppDevSeries';
import { ArrowUp } from 'lucide-react';
import profile from '../public/photo.jpg';
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail, Globe } from 'lucide-react';


function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-['Inter',sans-serif]">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <PublishedApps />
        <AppMockups />
        <OngoingProjects />
        <AppDevSeries />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-gradient-to-r from-[#3DDC84] to-[#02569B] text-white shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0 scroll-top-button' : 'opacity-0 translate-y-10 pointer-events-none'
        } hover:scale-110 glass-morphism`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

const About = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img 
            src={profile} 
            alt="Pradeep Singh" 
            className="rounded-lg shadow-md w-full max-w-sm mx-auto object-cover aspect-square"
          />
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://github.com/gprs1022" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-[#3DDC84] hover:text-white transition-all transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gprspradeep" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-[#0A66C2] hover:text-white transition-all transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/gprspradeep" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com/gprspradeep" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-[#E4405F] hover:text-white transition-all transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com/@gprspradeep" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-[#FF0000] hover:text-white transition-all transform hover:scale-110">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg font-medium bg-gradient-to-r from-[#3DDC84] to-[#02569B] bg-clip-text text-transparent">
              Hi! My name is Pradeep Singh I'm a
            </p>
            <div className="space-y-2">
              <p className="text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                👨‍💻 <span className="font-medium">Mobile App Developer</span> at <span className="text-[#3DDC84]">Technopedia Software Pvt. Ltd.</span> (1 year)
              </p>
              <p className="text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                ⭐ <span className="font-medium">RedHat Student Brand Ambassador</span>
              </p>
              <p className="text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                🏆 <span className="font-medium">Sprint Hacks 2k23 Winner @KIET</span>
              </p>
              <p className="text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                🚀 <span className="font-medium">Open Source | Scaler |GSSoC|SSOC| ADSC Lead</span>
              </p>
            </div>
            <p className="text-lg hover:scale-[1.02] transition-transform">
              I love creating things that exists on the internet. My interest in
              App development started in 2022 when i thought to upload my
              Digital Concept of Apps Online.
            </p>
            <p className="text-lg hover:scale-[1.02] transition-transform">
              Instead of making a online Concepts of Apps, i started enjoying
              Mobile App development at <span className="text-[#3DDC84] font-medium">Technopedia Software</span>. Creating custom things for Apps
              taught me a lot about design & development!
            </p>
            <p className="text-lg hover:scale-[1.02] transition-transform">
              My main focus these days is building interesting & creative
              Mobile App designs, I like to code things from scratch, and enjoy
              bringing ideas to life in the browser.
            </p>
            
            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="mailto:pradeep1022@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#3DDC84] hover:text-white transition-all">
                <Mail size={16} />
                <span>Email Me</span>
              </a>
              <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#02569B] hover:text-white transition-all">
                <Globe size={16} />
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;