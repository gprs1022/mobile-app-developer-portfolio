import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3DDC84] to-[#02569B] flex items-center justify-center text-white font-bold">
                PS
              </div>
              <div>
                <div className="font-bold text-lg">
                  <span className="text-[#3DDC84]">Pradeep</span>
                  <span className="text-white">Singh</span>
                </div>
                <div className="text-xs text-gray-400">Mobile App Developer</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="https://github.com/gprs1022" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gprspradeep/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/gprspradeep" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pradeep Singh. All rights reserved.
            <br />
           <a href="https://www.linkedin.com/in/veerbahadur-sen-a70965221/" className='text-sm text-green-500 hover:text-blue-500'>
            Designed by Veerbahadur Sen
            </a> 
          </div>
        </div>
      </div>
    </footer>
  );
};