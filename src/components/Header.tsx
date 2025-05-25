import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Award, Mail, CodeSquare } from 'lucide-react';
import profile from '../../public/photo.jpg';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3DDC84] to-[#02569B] p-[2px] hover:scale-110 transition-transform cursor-pointer">
            <img src={profile} alt="Pradeep Singh" className="w-full h-full rounded-full object-cover ring-2 ring-white" />
          </div>
          <div>
            <div className="font-bold text-lg">
              <span className="text-[#3DDC84]">Pradeep</span>
              <span className="text-[#02569B]">Singh</span>
            </div>
            <div className="text-xs text-gray-600">Mobile App Developer</div>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: 'Home', icon: Home },
            { name: 'About', icon: User },
            { name: 'Skills', icon: Code },
            { name: 'Projects', icon: Briefcase },
            { name: 'Experience', icon: Award },
            { name: '30daysAppdev', icon: CodeSquare },
            { name: 'Contact', icon: Mail }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-gray-800 hover:text-[#3DDC84] hover:bg-[#3DDC84]/10 transition-all group"
            >
              <item.icon size={18} className="group-hover:scale-110 transition-transform" />
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg rounded-b-2xl">
          <div className="flex flex-col py-4 px-2 space-y-1">
            {[
              { name: 'Home', icon: Home },
              { name: 'About', icon: User },
              { name: 'Skills', icon: Code },
              { name: 'Projects', icon: Briefcase },
              { name: 'Experience', icon: Award },
              { name: '30daysAppdev', icon: CodeSquare },
              { name: 'Contact', icon: Mail }
            ].map((item) => (
              <a 
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center gap-3 py-3 px-4 text-gray-800 hover:bg-[#3DDC84]/10 hover:text-[#3DDC84] rounded-xl transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon size={20} />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};