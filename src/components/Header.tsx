
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
          ? 'bg-white/90 shadow-md backdrop-blur-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <img 
            src="/lovable-uploads/f2e64251-23a1-44f9-bbcb-0fddd4845863.png" 
            alt="Sloth Park Logo" 
            className="h-12 md:h-16 w-auto object-contain" 
          />
          <span className={`text-xl md:text-2xl font-display font-medium transition-colors duration-300 ${
            scrolled ? 'text-jungle-800' : 'text-white drop-shadow-md'
          }`}>
            Sloth Park
          </span>
        </a>
        
        <nav className={`hidden md:flex items-center gap-6 text-sm font-medium transition-colors duration-300 ${
          scrolled ? 'text-jungle-800' : 'text-white drop-shadow-md'
        }`}>
          <a href="#tours" className="hover:text-sloth-400 transition-colors duration-200">Tours</a>
          <a href="#sloths" className="hover:text-sloth-400 transition-colors duration-200">About Sloths</a>
          <a href="#faq" className="hover:text-sloth-400 transition-colors duration-200">FAQ</a>
          <a 
            href="#booking" 
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-jungle-500 text-white hover:bg-jungle-600' 
                : 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30'
            }`}
          >
            Book Now
          </a>
        </nav>
        
        <button 
          aria-label="Menu" 
          className={`md:hidden flex flex-col gap-1.5 p-2 rounded-md ${
            scrolled ? 'text-jungle-800' : 'text-white'
          }`}
        >
          <span className="w-6 h-0.5 bg-current rounded-full transition-all"></span>
          <span className="w-6 h-0.5 bg-current rounded-full transition-all"></span>
          <span className="w-6 h-0.5 bg-current rounded-full transition-all"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
