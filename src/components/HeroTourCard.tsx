
import { useState } from 'react';

interface HeroTourCardProps {
  rank: number;
  title: string;
  price: string;
  duration: string;
  image: string;
  highlights: string[];
}

const HeroTourCard = ({ rank, title, price, duration, image, highlights }: HeroTourCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleBookNow = () => {
    window.open('https://wa.me/50661500559', '_blank');
  };

  return (
    <div 
      className="relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -top-2 -left-2 z-10 bg-jungle-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg">
        #{rank}
      </div>
      
      <div className="relative h-32 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
        
        <div className="flex justify-between items-center">
          <span className="text-jungle-300 font-bold">{price}</span>
          <span className="text-white/80 text-sm">{duration}</span>
        </div>
        
        <div className="space-y-1">
          {highlights.slice(0, 2).map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-jungle-300 rounded-full"></span>
              <span className="text-white/90 text-sm">{highlight}</span>
            </div>
          ))}
        </div>
        
        <button 
          onClick={handleBookNow}
          className="w-full bg-jungle-500 hover:bg-jungle-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HeroTourCard;
