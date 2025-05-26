
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-sm py-3 sm:py-4' 
          : 'bg-black/20 backdrop-blur-sm py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Brand text */}
          <a 
            href="/" 
            className="transition-transform duration-300 hover:scale-105"
          >
            <div className={`font-display font-bold transition-colors duration-300 ${
              scrolled ? 'text-jungle-800' : 'text-white drop-shadow-lg'
            }`}>
              <span className="text-xl sm:text-2xl md:text-3xl">Top Tours</span>
              <span className={`block text-base sm:text-lg md:text-xl font-medium ${
                scrolled ? 'text-jungle-600' : 'text-jungle-300'
              }`}>
                Costa Rica
              </span>
            </div>
          </a>
          
          <nav className={`hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium transition-colors duration-300 ${
            scrolled ? 'text-jungle-800' : 'text-white drop-shadow-md'
          }`}>
            <a href="#tours" className="hover:text-jungle-400 transition-colors duration-200">Top 10 Tours</a>
            <a href="#sloths" className="hover:text-jungle-400 transition-colors duration-200">Wildlife</a>
            <a href="#faq" className="hover:text-jungle-400 transition-colors duration-200">FAQ</a>
            <a 
              href="#booking" 
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 font-semibold text-sm sm:text-base ${
                scrolled 
                  ? 'bg-jungle-500 text-white hover:bg-jungle-600 shadow-md hover:shadow-lg' 
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:border-white/50'
              }`}
            >
              Book Now
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            aria-label="Menu" 
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-md transition-colors duration-300 ${
              scrolled ? 'text-jungle-800' : 'text-white'
            }`}
          >
            <span className="w-5 sm:w-6 h-0.5 bg-current rounded-full transition-all"></span>
            <span className="w-5 sm:w-6 h-0.5 bg-current rounded-full transition-all"></span>
            <span className="w-5 sm:w-6 h-0.5 bg-current rounded-full transition-all"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
