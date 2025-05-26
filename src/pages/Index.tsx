
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SlothChatbot from '@/components/SlothChatbot';
import TourCard from '@/components/TourCard';
import Footer from '@/components/Footer';
import RainforestSounds from '@/components/RainforestSounds';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Handler for book now button
  const handleBookNow = () => {
    // Open WhatsApp with the provided number
    window.open('https://wa.me/50661500559', '_blank');
  };

  const tours = [
    {
      rank: 1,
      title: "Sloth Tour",
      description: "Get up close with both two and three-fingered sloths in their natural habitat with our expert guides.",
      image: "/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png",
      price: "$60 per person",
      duration: "90 minutes",
      highlights: [
        "See both types of sloths",
        "Viewing scopes provided",
        "Expert guide included",
        "Children are free"
      ],
      times: "Tours run every hour",
      operatorLogo: "/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
    },
    {
      rank: 2,
      title: "Rio Habana Night Walk",
      description: "Experience the magic of the rainforest after dark and discover nocturnal wildlife in their natural habitat. Provided by Rio Habana Night Walk.",
      image: "/lovable-uploads/6eb75cec-ba71-4e1d-8183-64d7a3471f04.png",
      price: "$45 per person",
      duration: "2 hours",
      highlights: [
        "Guided night walk",
        "Observe frogs, insects and other nocturnal animals",
        "Special night vision equipment provided",
        "Small groups for personalized experience"
      ],
      times: "Daily at 6:00 PM and 8:00 PM"
    },
    {
      rank: 3,
      title: "Chocolate, Coffee, and Sugarcane Tour",
      description: "Indulge in a sensory experience as you explore the rich flavors of Costa Rica's finest exports.",
      image: "/lovable-uploads/9f6a0983-c517-4da7-856a-3270cf110640.png",
      price: "$35 per person",
      duration: "90 minutes",
      highlights: [
        "Taste premium chocolate",
        "Sample local coffee",
        "Learn about sugarcane processing"
      ],
      times: "Available daily",
      operatorLogo: "/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
    },
    {
      rank: 4,
      title: "Adventure Combo",
      description: "Experience the thrill of ATV riding, white water rafting, and a waterfall hike with hot springs and a volcanic mud bath.",
      image: "/lovable-uploads/b6db074f-567f-42b0-b2d8-dcfa8d7547f7.png",
      price: "Varies",
      duration: "Full day",
      highlights: [
        "ATV adventure",
        "White water rafting",
        "Waterfall hike",
        "Hot springs and volcanic mud bath"
      ],
      times: "Starts any time",
      operatorLogo: "/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
    },
    {
      rank: 5,
      title: "Morning Volcano Hike with Mistico Hanging Bridges",
      description: "Hike a volcano in the morning and explore the rainforest canopy on the Mistico Hanging Bridges.",
      image: "/lovable-uploads/0415fed3-f136-4a5a-810b-00216b4c5d26.png",
      price: "Varies",
      duration: "Full day",
      highlights: [
        "Volcano hike",
        "Mistico Hanging Bridges",
        "Lunch included",
        "Transportation included"
      ],
      times: "Starts at 10:20 AM",
      operatorLogo: "/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
    },
    {
      rank: 6,
      title: "Afternoon Volcano Hike with Mistico Hanging Bridges",
      description: "Hike a volcano in the afternoon and explore the rainforest canopy on the Mistico Hanging Bridges.",
      image: "/lovable-uploads/0415fed3-f136-4a5a-810b-00216b4c5d26.png",
      price: "Varies",
      duration: "Full day",
      highlights: [
        "Volcano hike",
        "Mistico Hanging Bridges",
        "Lunch included",
        "Transportation included"
      ],
      times: "Starts at 1:40 PM",
      operatorLogo: "/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
    },
    {
      rank: 7,
      title: "Rio Celeste Tour and Hike",
      description: "Discover the stunning turquoise waters of Rio Celeste and hike to its beautiful waterfall.",
      image: "/lovable-uploads/b6db074f-567f-42b0-b2d8-dcfa8d7547f7.png",
      price: "Varies",
      duration: "Full day",
      highlights: [
        "Rio Celeste hike",
        "Waterfall visit",
        "Lunch included"
      ],
      times: "Leaves at 7:30 AM",
      operatorLogo: "/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
    },
    {
      rank: 8,
      title: "Zipline Adventure",
      description: "Soar through the rainforest canopy on an exhilarating zipline adventure.",
      image: "/lovable-uploads/5ee1f55b-70f3-4635-a28a-403ebaf70a28.png",
      price: "Varies",
      duration: "Flexible",
      highlights: [
        "Zipline experience",
        "Stunning views"
      ],
      times: "Runs all day until 3 PM",
      operatorLogo: "/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
    },
    {
      rank: 9,
      title: "Hanging Bridges Tour",
      description: "Explore the rainforest canopy on a network of hanging bridges with breathtaking views.",
      image: "/lovable-uploads/0415fed3-f136-4a5a-810b-00216b4c5d26.png",
      price: "Varies",
      duration: "Half day",
      highlights: [
        "Hanging bridges",
        "Rainforest views"
      ],
      times: "Leaves at 8:30 AM and 1:30 PM",
      operatorLogo: "/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
    }
  ];

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Chatbot */}
      <SlothChatbot />
      
      {/* Rainforest Sounds */}
      <RainforestSounds />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 z-10"></div>
          <img 
            src="/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png"
            alt="Costa Rica rainforest adventure" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 px-4 sm:px-6 md:px-8 text-center max-w-6xl mx-auto pt-20">
          <div className="space-y-6 sm:space-y-8">
            {/* Main heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight drop-shadow-lg">
                Top Tours
                <span className="block text-jungle-300 mt-1 sm:mt-2">Costa Rica</span>
              </h1>
              <div className="h-1 w-16 sm:w-24 bg-jungle-300 mx-auto rounded-full"></div>
            </div>
            
            {/* Subtitle and description */}
            <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light drop-shadow-md">
                Discover the magical diversity of Costa Rica
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-sm px-4">
                Expert-guided adventures through pristine rainforests, wildlife encounters, and unforgettable experiences in the heart of Central America's natural paradise
              </p>
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 px-4">
              <a 
                href="#tours" 
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-jungle-500 hover:bg-jungle-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base sm:text-lg hover:scale-105 transform"
              >
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                  Explore Top 10 Tours
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              <button 
                onClick={handleBookNow}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base sm:text-lg hover:scale-105 transform"
              >
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                  Book Now
                  <span className="group-hover:scale-110 transition-transform duration-300">✨</span>
                </span>
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 sm:pt-12 px-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 inline-block border border-white/20 shadow-xl max-w-sm sm:max-w-none mx-auto">
                <p className="text-white/95 text-base sm:text-lg font-medium mb-2">
                  Premium tours curated by
                </p>
                <p className="text-white font-bold text-lg sm:text-xl">
                  Top Tours Costa Rica
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4 text-white/80 text-xs sm:text-sm">
                  <span className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>Expert Guides</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <span>🌿</span>
                    <span>Eco-Friendly</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <span>🦥</span>
                    <span>Wildlife Specialists</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-jungle-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-jungle-900 mb-4">
              Top 10 Premium Tours
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-jungle-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-jungle-700 max-w-3xl mx-auto leading-relaxed px-4">
              Experience the best of Costa Rica with our carefully ranked selection of tours, 
              designed to showcase the country's incredible biodiversity and natural wonders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-3 -left-3 z-10 bg-jungle-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base shadow-lg">
                  #{tour.rank}
                </div>
                <TourCard 
                  title={tour.title}
                  description={tour.description}
                  image={tour.image}
                  price={tour.price}
                  duration={tour.duration}
                  highlights={tour.highlights}
                  times={tour.times}
                  operatorLogo={tour.operatorLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sloths Section */}
      <section id="sloths" className="py-12 sm:py-16 lg:py-20 bg-sloth-50/50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-sloth-900 mb-4">
              Wildlife Spotlight: Sloths
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-sloth-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png"
                alt="Two-fingered sloth" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 px-4 lg:px-0">
              <p className="text-base sm:text-lg text-sloth-800 leading-relaxed">
                Sloths are among Costa Rica's most beloved creatures, known for their gentle nature and arboreal lifestyle. They primarily live in the rainforests and are perfectly adapted to life in the trees.
              </p>
              <p className="text-base sm:text-lg text-sloth-800 leading-relaxed">
                There are two types of sloths: two-fingered and three-fingered. Both are incredibly adapted to life in the trees, with specialized claws for hanging onto branches.
              </p>
              <p className="text-base sm:text-lg text-sloth-800 leading-relaxed">
                On our sloth tours, you can observe these amazing creatures in their natural habitat and learn about their unique adaptations and conservation status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-jungle-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-jungle-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-jungle-800 mb-3">
                  What should I bring on the tours?
                </h3>
                <p className="text-base sm:text-lg text-jungle-700 leading-relaxed">
                  We recommend bringing comfortable walking shoes, rain gear, insect repellent, and a camera to capture the amazing sights.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-jungle-800 mb-3">
                  Are the tours suitable for children?
                </h3>
                <p className="text-base sm:text-lg text-jungle-700 leading-relaxed">
                  Yes, our tours are family-friendly! Many of our tours welcome children, and children are free on the Sloth Tour. We ensure a safe and educational experience for all ages.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-jungle-800 mb-3">
                  What is the best time for wildlife viewing?
                </h3>
                <p className="text-base sm:text-lg text-jungle-700 leading-relaxed">
                  Wildlife is active throughout the day, but many animals are easier to spot during the cooler morning hours or during our special night tours.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-jungle-800 mb-3">
                  How can I book a tour?
                </h3>
                <p className="text-base sm:text-lg text-jungle-700 leading-relaxed">
                  You can book a tour by contacting Top Tours Costa Rica via WhatsApp at +506 6150 0559 or by email at toptourscostarica@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-sloth-100 to-sloth-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-sloth-900">
              Book Your Costa Rican Adventure Today!
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-sloth-500 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-sloth-800 leading-relaxed px-4">
              Ready to experience the wonders of Costa Rica? Book your tour now and create unforgettable memories.
            </p>
            <p className="text-base sm:text-lg text-sloth-700 px-4">
              <strong>Top Tours Costa Rica</strong> - Your trusted partner for authentic Costa Rican adventures
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4">
              <button 
                onClick={handleBookNow}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-sloth-500 hover:bg-sloth-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base sm:text-lg hover:scale-105 transform"
              >
                Contact via WhatsApp
              </button>
              <a 
                href="mailto:toptourscostarica@gmail.com" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-jungle-500 hover:bg-jungle-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base sm:text-lg hover:scale-105 transform"
              >
                Email Us
              </a>
            </div>
            <p className="text-sloth-700 text-base sm:text-lg px-4">
              Top Tours Costa Rica - Experience the Pura Vida
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
