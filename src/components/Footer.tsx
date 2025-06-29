
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, we would send this to a backend
      // Here we'll simulate sending it to Top Tours Costa Rica
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@toptourscostarica', '_blank');
  };
  
  return (
    <footer className="bg-jungle-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/f2e64251-23a1-44f9-bbcb-0fddd4845863.png" 
                alt="Sloth Park Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-display font-medium">Sloth Park</span>
            </div>
            <p className="text-jungle-100 text-sm">
              Experience the magic of sloths in their natural habitat along with thrilling adventure tours in the heart of the rainforest.
            </p>
            <p className="text-jungle-100 text-sm">
              Tours provided by <strong>Top Tours Costa Rica</strong>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-jungle-100 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-jungle-100 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <button
                onClick={handleTikTokClick}
                className="text-jungle-100 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <span className="text-lg">📱</span>
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-jungle-100">
              <li><a href="#tours" className="hover:text-white transition-colors">Our Tours</a></li>
              <li><a href="#sloths" className="hover:text-white transition-colors">About Sloths</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book a Tour</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li>
                <button 
                  onClick={handleTikTokClick}
                  className="hover:text-white transition-colors text-left"
                >
                  TikTok Reviews
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3 text-jungle-100">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 text-jungle-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rainforest Road 42, Arenal<br />Costa Rica</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-jungle-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+50661500559" className="hover:text-white transition-colors">+506 6150 0559</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-jungle-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:toptourscostarica@gmail.com" className="hover:text-white transition-colors">toptourscostarica@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <button 
                  onClick={handleTikTokClick}
                  className="hover:text-white transition-colors"
                >
                  @toptourscostarica
                </button>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-jungle-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Open daily 7:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
            <p className="text-jungle-100 text-sm mb-4">
              Get updates on new tours, special promotions, and follow our weekly TikTok reviews!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg bg-jungle-800 text-white border border-jungle-700 focus:outline-none focus:ring-2 focus:ring-jungle-400 placeholder-jungle-400"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-sloth-500 hover:bg-sloth-600 text-white rounded-lg transition-colors shadow-sm font-medium"
                >
                  Subscribe
                </button>
                {isSubmitted && (
                  <p className="text-jungle-400 text-sm animate-fade-in">
                    Thanks for subscribing!
                  </p>
                )}
              </div>
            </form>
            <div className="mt-4">
              <button
                onClick={handleTikTokClick}
                className="flex items-center gap-2 text-sm text-jungle-100 hover:text-white transition-colors"
              >
                <span className="text-base">📱</span>
                Weekly TikTok Reviews
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-jungle-800 text-center text-jungle-400 text-sm">
          <p>© {new Date().getFullYear()} Sloth Park. All rights reserved. Tours provided by Top Tours Costa Rica.</p>
          <p className="mt-2">Follow our weekly tour reviews @toptourscostarica on TikTok</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
