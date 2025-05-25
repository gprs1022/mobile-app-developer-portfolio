import React from 'react';
import { Smartphone } from 'lucide-react';
import one from '../../public/1.jpg';
import Two from '../../public/2.jpg';
import Three from '../../public/3.jpg';
import couger1 from '../../public/couger1.jpg';
import couger2 from '../../public/couger2.jpg';
import couger3 from '../../public/couger3.jpg';
import vimal1 from '../../public/vimal1.webp';
import vimal2 from '../../public/vimal2.webp';
import vimal3 from '../../public/vimal3.jpg';
import career1 from '../../public/career1.jpg';
import career2 from '../../public/career2.jpg';
import career3 from '../../public/career3.jpg';
import pharmapedia1 from '../../public/pharmapedia1.jpg';
import pharmapedia2 from '../../public/pharmapedia2.jpg';
import pharmapedia3 from '../../public/pharmapedia3.jpg';




export const AppMockups = () => {
  const apps = [
    {
      name: 'Mobimist',
      color: '#1870E5',
      screens: [
        one,
        Two,
        Three
      ],
      features: [
        'Buy Refurbished Phones: Browse and purchase verified refurbished smartphones and accessories',
        'Phone Repair Services: Book phone repairs by selecting brand, model, and issue with real-time service tracking',
        'Secure Authentication: OTP-based user login and registration with Flutter Secure Storage',
        'Dynamic Product Listings: Display models and services dynamically based on brand and category selection',
        'Order Management: Track order history, repair status, and service invoices',
        'Admin Panel (Web): Manage users, products, services, and orders from a separate web dashboard'
      ]
    },
    {
      name: 'Couger Motorsports',
      color: '#E7000C',
      screens: [
        couger1,
        couger2,
        couger3
      ],
      features: [
        'Vehicle Showcase: Interactive gallery of motorsport vehicles with detailed specifications',
        'Event Calendar: Upcoming races, exhibitions, and team events with registration options',
        'Team Profiles: Detailed information about drivers, engineers, and support staff',
        'Live Race Updates: Real-time notifications and updates during racing events',
        'Performance Analytics: Track and analyze vehicle performance metrics and race statistics',
        'Fan Engagement: Interactive content, polls, and exclusive behind-the-scenes footage'
      ]
    },
    {
      name: 'Vimal Mega Mart',
      color: '#13B5D4',
      screens: [
        vimal1,
        vimal2,
        vimal3
      ],
      features: [
        'Product Catalog: Browse thousands of products across multiple categories with detailed descriptions',
        'Smart Search: Find products quickly with advanced filtering and sorting options',
        'Personalized Recommendations: AI-powered product suggestions based on browsing and purchase history',
        'Secure Checkout: Multiple payment options with end-to-end encryption for secure transactions',
        'Order Tracking: Real-time updates on order processing, shipping, and delivery status',
        'Loyalty Program: Earn and redeem points for discounts and exclusive offers'
      ]
    },
    {
      name: 'Career Charm',
      color: '#13B5D4',
      screens: [
        career1,
        career2,
        career3
      ],
      features: [
        'Resume Builder: Create professional resumes with customizable templates and real-time preview',
        'Job Matching: AI-powered job recommendations based on skills, experience, and preferences',
        'Interview Preparation: Practice with mock interviews and get feedback on your responses',
        'Skill Assessment: Evaluate your technical and soft skills with industry-standard tests',
        'Career Path Planning: Visualize potential career trajectories and required skill development',
        'Networking Tools: Connect with professionals and recruiters in your desired industry'
      ]
    },
    {
      name: 'Pharma Pedia',
      color: '#13B5D4',
      screens: [
        pharmapedia1,
        pharmapedia2,
        pharmapedia3
        
      ],
      features: [
        'Medication Database: Comprehensive information on thousands of medications with usage guidelines',
        'Drug Interaction Checker: Identify potential interactions between multiple medications',
        'Prescription Management: Track prescriptions, set reminders, and receive refill notifications',
        'Symptom Checker: Input symptoms to get possible conditions and recommended actions',
        'Pharmacy Locator: Find nearby pharmacies with availability information for specific medications',
        'Medical Reference: Access to medical journals, articles, and research papers on pharmaceutical topics'
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Smartphone className="text-[#3DDC84]" />
          App Showcase
        </h2>
        <p className="text-gray-600 mb-12">A closer look at some of my featured applications</p>

        <div className="space-y-24">
          {apps.map((app, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: app.color }}>{app.name}</h3>
                  <div className="flex gap-4">
                    {app.screens.map((screen, i) => (
                      <div 
                        key={i}
                        className="relative w-[200px] transform transition-transform hover:scale-105"
                      >
                        <div className="w-full aspect-[9/19] bg-gray-900 rounded-[32px] p-2 shadow-xl">
                          <img 
                            src={screen}
                            alt={`${app.name} screenshot ${i + 1}`}
                            className="w-full h-full object-cover rounded-[24px]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {app.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: app.color }}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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