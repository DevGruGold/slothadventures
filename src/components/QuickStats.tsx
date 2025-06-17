
import { useEffect, useState } from 'react';

const QuickStats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    tours: 0,
    customers: 0,
    years: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const counter = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          tours: Math.floor(10 * progress),
          customers: Math.floor(5000 * progress),
          years: Math.floor(15 * progress)
        });
        
        if (step >= steps) {
          clearInterval(counter);
          setAnimatedStats({ tours: 10, customers: 5000, years: 15 });
        }
      }, interval);
      
      return () => clearInterval(counter);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
      <div className="space-y-2">
        <div className="text-2xl sm:text-3xl font-bold text-white">
          {animatedStats.tours}+
        </div>
        <div className="text-white/80 text-sm sm:text-base">Premium Tours</div>
      </div>
      <div className="space-y-2">
        <div className="text-2xl sm:text-3xl font-bold text-white">
          {animatedStats.customers.toLocaleString()}+
        </div>
        <div className="text-white/80 text-sm sm:text-base">Happy Guests</div>
      </div>
      <div className="space-y-2">
        <div className="text-2xl sm:text-3xl font-bold text-white">
          {animatedStats.years}+
        </div>
        <div className="text-white/80 text-sm sm:text-base">Years Experience</div>
      </div>
    </div>
  );
};

export default QuickStats;
