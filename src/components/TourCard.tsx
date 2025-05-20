import { useState } from 'react';

interface TourCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  highlights: string[];
  times?: string;
}

const TourCard = ({ 
  title, 
  description, 
  image, 
  price, 
  duration, 
  highlights,
  times
}: TourCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleBookNow = () => {
    // Open WhatsApp with the provided number
    window.open('https://wa.me/50661500559', '_blank');
  };
  
  // Determine if this is the sloth tour to keep the same image
  const isSlothTour = title.toLowerCase().includes('sloth');

  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-500 ease-in-out h-full flex flex-col bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with blur-up loading */}
      <div 
        className={`relative w-full aspect-[4/3] overflow-hidden ${!imageLoaded ? 'blur-load' : 'loaded'}`}
        style={{ backgroundImage: `url(${image}?blur=30&w=50)` }}
      >
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-sloth-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md z-10">
          {price}
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-jungle-800 px-3 py-1 rounded-full text-sm font-medium shadow-md z-10">
          {duration}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-5">
        <h3 className="text-xl font-display font-semibold text-jungle-800 mb-2 group-hover:text-jungle-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {times && (
          <div className="bg-jungle-50 rounded-lg p-3 mb-4">
            <p className="text-sm text-jungle-800 font-medium">
              <span className="text-jungle-600 mr-2">⏰</span> 
              {times}
            </p>
          </div>
        )}
        
        <div className="hidden group-hover:block animate-fade-in">
          <h4 className="font-medium text-jungle-700 text-sm mb-2">Highlights:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <svg className="h-4 w-4 text-jungle-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tour operator attribution */}
        <div className="mt-4 text-xs text-jungle-600">
          <p className="italic">Operated by Arenal Jungle Tours via Top Tours Costa Rica</p>
        </div>
      </div>
      
      {/* Book button */}
      <div className="p-5 pt-0 mt-auto">
        <button 
          onClick={handleBookNow}
          className="w-full py-3 bg-jungle-500 hover:bg-jungle-600 text-white rounded-lg transition-colors shadow-sm font-medium"
        >
          Book This Tour
        </button>
      </div>
    </div>
  );
};

export default TourCard;
