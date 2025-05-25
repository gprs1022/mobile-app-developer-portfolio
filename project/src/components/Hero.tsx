import React from 'react';
import { Eye, Send, Smartphone, Download } from 'lucide-react';
import profile from '../../public/photo.jpg';
import Resume from '../../public/Pradeep Singh Remume New.pdf';


export const Hero = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section id="home" className="pt-28 pb-16 px-4 min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-[#3DDC84]/10 to-transparent rounded-full transform rotate-12 animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-[#02569B]/10 to-transparent rounded-full transform -rotate-12 animate-float-delayed"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="md:w-1/2">
          <div className="inline-block px-3 py-1 bg-[#3DDC84]/10 text-[#3DDC84] rounded-full text-sm font-medium mb-6 hover:scale-110 transition-transform">
            &lt;/&gt; Mobile App Developer
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Hi, I'm <span className="text-[#3DDC84]">Pradeep</span> <span className="text-black">Singh</span>
          </h1>
          
          <p className="text-lg mb-8 text-gray-700 leading-relaxed animate-fade-in">
            I create beautiful, functional mobile experiences for Android and iOS using native technologies and Flutter. Let's build something amazing together!
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3DDC84] to-[#02569B] text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <Eye size={18} className="animate-pulse" />
              View My Work
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all hover:scale-105 transform glass-morphism"
            >
              <Send size={18} className="animate-bounce" />
              Contact Me
            </a>
            <a 
              href={Resume} 
              download="Pradeep Singh Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <Download size={18} className="animate-bounce" />
              Download Resume
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#3DDC84]/10 flex items-center justify-center hover:scale-110 transition-transform z-30">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1031px-Android_logo_2019_%28stacked%29.svg.png?20210331145341" alt="Android" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:scale-110 transition-transform z-20">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg" alt="iOS" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#02569B]/10 flex items-center justify-center hover:scale-110 transition-transform z-10">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" alt="Flutter" className="w-6 h-6" />
              </div>
            </div>
            <span className="text-gray-600 animate-fade-in">5+ years of mobile development experience</span>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative transform hover:scale-105 transition-all duration-500 hover:rotate-0 rotate-6">
            <div className="w-[280px] h-[580px] bg-gradient-to-br from-gray-900 to-black rounded-[40px] p-3 shadow-2xl mx-auto glass-morphism relative border-[8px] border-black">
              {/* Phone frame details */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20"></div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/80 rounded-full z-20 flex items-center justify-center">
                <div className="w-6 h-1 bg-gray-800 rounded-full"></div>
              </div>
              <div className="absolute top-1.5 right-5 w-1.5 h-1.5 rounded-full bg-white z-20"></div>
              
              <div className="w-full h-full bg-gradient-to-br from-[#3DDC84] to-[#02569B] rounded-[32px] overflow-hidden relative">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-7 z-20 flex items-center justify-between px-5 text-white/90 text-xs">
                  <div>{currentTime}</div>
                  {/* <div className="flex items-center border  gap-1">
                    <div className="w-3 h-3 rounded-full border border-white/90"></div>
                    <div className="w-3 h-3 flex items-end">
                      <div className="w-0.5 h-1.5 bg-white/90 rounded-full mx-px"></div>
                      <div className="w-0.5 h-2 bg-white/90 rounded-full mx-px"></div>
                      <div className="w-0.5 h-2.5 bg-white/90 rounded-full mx-px"></div>
                    </div>
                    <div className="w-3 h-3">
                      <div className="w-2 h-1.5 border-l border-t border-r border-white/90 rounded-t-sm"></div>
                      <div className="w-2 h-0.5 bg-white/90"></div>
                    </div>
                  </div> */}
                </div>
                <div className="pt-14 px-4 h-full backdrop-blur-sm overflow-y-auto scrollbar-hide">
                  <div className="space-y-4">
                    {/* Profile Header */}
                    <div className="bg-white/90 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3DDC84] to-[#02569B] p-[2px] ring-2 ring-white/20">
                          <img src={profile} alt="Pradeep Singh" className="w-full h-full rounded-full object-cover"/>
                        </div>
                        <div>
                          <h3 className="font-bold gradient-text">Pradeep Singh</h3>
                          <p className="text-sm text-gray-600">Mobile App Developer</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Preview */}
                    <div className="bg-white/90 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
                      <h4 className="font-medium mb-3 gradient-text">Top Skills</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" alt="Flutter" className="w-5 h-5" />
                          <div className="flex-1">
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-[#02569B] rounded-full" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-600">95%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1031px-Android_logo_2019_%28stacked%29.svg.png?20210331145341" alt="Android" className="w-5 h-5" />
                          <div className="flex-1">
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-[#3DDC84] rounded-full" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-600">90%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg" alt="iOS" className="w-5 h-5" />
                          <div className="flex-1">
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-black rounded-full" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-600">80%</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Projects */}
                    <div className="bg-white/90 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
                      <h4 className="font-medium mb-3 gradient-text">Recent Projects</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-100 aspect-square rounded-lg p-3 hover:scale-105 transition-transform">
                          <div className="w-10 h-10 bg-[#3DDC84]/20 rounded-full flex items-center justify-center animate-float mb-2">
                            <span className="text-[#3DDC84] text-xl">A</span>
                          </div>
                          <p className="text-xs text-gray-600">Android App</p>
                        </div>
                        <div className="bg-gray-100 aspect-square rounded-lg p-3 hover:scale-105 transition-transform">
                          <div className="w-10 h-10 bg-[#02569B]/20 rounded-full flex items-center justify-center animate-float-delayed mb-2">
                            <span className="text-[#02569B] text-xl">F</span>
                          </div>
                          <p className="text-xs text-gray-600">Flutter App</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Preview */}
                    <div className="bg-white/90 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
                      <h4 className="font-medium mb-3 gradient-text">Get in Touch</h4>
                      <button className="w-full py-2 bg-gradient-to-r from-[#3DDC84] to-[#02569B] text-white rounded-lg text-sm hover:shadow-lg transition-all hover:scale-105">
                        Contact Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements with enhanced animations */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float hover:scale-110 transition-transform glass-morphism">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1031px-Android_logo_2019_%28stacked%29.svg.png?20210331145341" alt="Android" className="w-8 h-8" />
            </div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float-delayed hover:scale-110 transition-transform glass-morphism">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg" alt="iOS" className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float-more-delayed hover:scale-110 transition-transform glass-morphism">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" alt="Flutter" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};