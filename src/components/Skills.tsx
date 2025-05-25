import React from 'react';
import { Code, Smartphone, Terminal, Layout, Palette, Database } from 'lucide-react';

export const Skills = () => {
  const skills = [
    {
      category: 'Mobile Development',
      icon: <Smartphone className="text-[#3DDC84] animate-pulse" />,
      items: [
        { name: 'Android Native (Java/Kotlin)', level: 90, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1031px-Android_logo_2019_%28stacked%29.svg.png?20210331145341' },
        { name: 'iOS with Flutter', level: 80, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg' },
        { name: 'Flutter', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
        { name: 'Firebase', level: 85, icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' }
      ]
    },
    {
      category: 'Languages & Tools',
      icon: <Terminal className="text-[#02569B] animate-pulse" />,
      items: [
        { name: 'Kotlin', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg' },
        { name: 'Jetpack Compose', level: 80, icon: 'https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png' },
        { name: 'Dart', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg' },
        { name: 'XML', level: 85, icon: 'https://cdn.worldvectorlogo.com/logos/xml-2.svg' }
      ]
    },
    {
      category: 'Architecture & Patterns',
      icon: <Layout className="text-[#F97316] animate-pulse" />,
      items: [
        { name: 'MVVM Architecture', level: 90, icon: '📐' },
        { name: 'BLoC Pattern', level: 85, icon: '🔄' },
        { name: 'Clean Architecture', level: 80, icon: '🏛️' },
        { name: 'GetX State Management', level: 95, icon: '⚡' }
      ]
    },
    {
      category: 'Design Tools',
      icon: <Palette className="text-[#FF7262] animate-pulse" />,
      items: [
        { name: 'Figma', level: 85, icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
        { name: 'Canva', level: 80, icon: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg' },
        { name: 'Adobe XD', level: 75, icon: 'https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg' },
        { name: 'Material Design', level: 90, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/512px-Google_Material_Design_Logo.svg.png' }
      ]
    },
    {
      category: 'Backend & Database',
      icon: <Database className="text-[#4479A1] animate-pulse" />,
      items: [
        { name: 'Firebase Firestore', level: 90, icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
        { name: 'SQLite', level: 85, icon: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg' },
        { name: 'Room Database', level: 80, icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/android/android.png' },
        { name: 'RESTful APIs', level: 90, icon: '🔄' }
      ]
    },
    {
      category: 'Version Control & Tools',
      icon: <Code className="text-[#181717] animate-pulse" />,
      items: [
        { name: 'Git', level: 90, icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
        { name: 'GitHub', level: 95, icon: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
        { name: 'Jira', level: 80, icon: 'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg' },
        { name: 'Bitbucket', level: 85, icon: 'https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#3DDC84]/5 to-transparent rounded-full transform rotate-45 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#02569B]/5 to-transparent rounded-full transform -rotate-45 animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Code className="text-[#3DDC84] animate-pulse" />
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="text-gray-600 mb-12 animate-fade-in">Technical skills and proficiencies I've developed over the years</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex} 
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-[1.02] glass-morphism"
            >
              <div className="flex items-center gap-2 mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-bold gradient-text">{skillGroup.category}</h3>
              </div>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2 group">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-100/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {typeof skill.icon === 'string' ? (
                            skill.icon.startsWith('http') ? (
                              <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                            ) : (
                              <span className="text-xl">{skill.icon}</span>
                            )
                          ) : null}
                        </div>
                        <span className="text-gray-700 group-hover:text-[#3DDC84] transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100/80 px-2 py-1 rounded-full group-hover:scale-110 transition-transform">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg relative overflow-hidden"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skillGroup.category === 'Mobile Development' 
                            ? '#3DDC84' 
                            : skillGroup.category === 'Languages & Tools'
                              ? '#02569B'
                              : skillGroup.category === 'Architecture & Patterns'
                                ? '#F97316'
                                : skillGroup.category === 'Design Tools'
                                  ? '#FF7262'
                                  : skillGroup.category === 'Backend & Database'
                                    ? '#4479A1'
                                    : '#181717'
                        }}
                      >
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
                          style={{ transform: 'translateX(-100%)' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};