import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#3DDC84]/5 to-transparent rounded-full transform rotate-45 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#02569B]/5 to-transparent rounded-full transform -rotate-45 animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Mail className="text-[#3DDC84] animate-bounce" />
          <span className="gradient-text">Get in Touch</span>
        </h2>
        <p className="text-gray-600 mb-12 animate-fade-in">Let's discuss your next mobile app project</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] glass-morphism">
              <h3 className="text-xl font-bold mb-4 gradient-text">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#3DDC84]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-[#3DDC84]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-700 hover:text-[#3DDC84] transition-colors">+91 7471178742</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#02569B]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-[#02569B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:contact@example.com" className="text-gray-700 hover:text-[#02569B] transition-colors">pradeep1022gprs@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-700">Noida, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3DDC84] focus:border-transparent outline-none transition-all glass-morphism"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3DDC84] focus:border-transparent outline-none transition-all glass-morphism"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3DDC84] focus:border-transparent outline-none transition-all glass-morphism"
                placeholder="Project Discussion"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3DDC84] focus:border-transparent outline-none transition-all glass-morphism"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#3DDC84] to-[#02569B] text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <Send className="group-hover:translate-x-2 transition-transform" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};