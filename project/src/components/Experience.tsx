import React from 'react';
import { Briefcase, Calendar, Wrench, Building2 } from 'lucide-react';
import logo from '../../public/logo.png'; // Importing the image from the public folder

export const Experience = () => {
  const experiences = [
    {
      company: 'Technopedia Software Pvt. Ltd.',
      logo: logo, // Using an existing image from the public folder as placeholder
      role: 'Software Developer',
      period: 'Dec 2024 - Present',
      duration: '9 mos',
      location: 'Noida, Uttar Pradesh, India · On-site',
      type: 'Full-time',
      highlights: [
        'Developed 3+ cross-platform mobile apps using Flutter with GetX state management.',
        'Integrated Firebase Auth, Firestore, and custom Node.js APIs using Dio.',
        'Used Jetpack Compose for native Android modules with MVVM structure.',
        'Collaborated with UI/UX designers and backend team to deliver end-to-end features.',
        'Published 2 apps to Google Play Store.'
      ],
      techStack: 'Flutter, Kotlin, Jetpack Compose, Firebase, REST API, Git',
      skills: 'Android, Android Design +9 skills'
    },
    {
      company: 'Technopedia Software Pvt. Ltd.',
      logo: logo, // Using an existing image from the public folder as placeholder
      role: 'Software Developer',
      period: 'Oct 2024 - Dec 2024',
      duration: '3 mos',
      location: 'Noida, Uttar Pradesh, India · On-site',
      type: 'Internship',
      highlights: [
        'Worked on Flutter development projects',
        'Learned and applied Flutter SDK in real-world applications',
        'Contributed to mobile app development lifecycle',
        'Gained hands-on experience with Flutter framework'
      ],
      techStack: 'Flutter Development',
      skills: 'Flutter SDK, Flutter +1 skill'
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#3DDC84]/5 to-transparent rounded-full transform rotate-45 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#02569B]/5 to-transparent rounded-full transform -rotate-45 animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Briefcase className="text-[#3DDC84] animate-bounce" />
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-gray-600 mb-12 animate-fade-in">My professional journey in mobile app development</p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] glass-morphism"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="flex items-start gap-4">
                    {exp.logo ? (
                      <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md flex-shrink-0 border border-gray-100">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#3DDC84] to-[#02569B] flex items-center justify-center flex-shrink-0 shadow-md">
                        <Building2 size={32} className="text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 gradient-text">{exp.role}</h3>
                      <p className="text-[#3DDC84] font-medium text-lg">{exp.company}</p>
                      <p className="text-gray-600 text-sm mt-1">{exp.location}</p>
                      <p className="text-gray-600 text-sm mt-1">{exp.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="flex items-center text-gray-600 bg-gray-100/80 px-4 py-2 rounded-full">
                      <Calendar size={18} className="mr-2 text-[#02569B]" />
                      {exp.period}
                    </div>
                    <div className="text-gray-500 text-sm mt-2">{exp.duration}</div>
                  </div>
                </div>
                
                <div className="mb-4 mt-6">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Key Contributions:</h4>
                  <ul className="space-y-3 text-gray-700">
                    {exp.highlights.map((highlight, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3 group hover:transform hover:translate-x-2 transition-transform"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#3DDC84] to-[#02569B] group-hover:scale-150 transition-transform"></div>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Wrench size={16} className="text-[#02569B]" />
                    <span className="text-sm font-medium text-gray-700">Tech Stack:</span>
                    <span className="text-sm text-gray-600">{exp.techStack}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#3DDC84] to-[#02569B] flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{exp.skills}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};