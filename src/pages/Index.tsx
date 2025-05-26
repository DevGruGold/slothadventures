
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-jungle-900/70 via-jungle-800/60 to-jungle-700/80 z-10"></div>
          <img 
            src="/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png"
            alt="Costa Rica rainforest adventure" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 px-6 md:px-8 text-center max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                Top Tours
                <span className="block text-jungle-300 mt-2">Costa Rica</span>
              </h1>
              <div className="h-1 w-24 bg-jungle-300 mx-auto rounded-full"></div>
            </div>
            
            {/* Subtitle and description */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-white font-light">
                Discover the magical diversity of Costa Rica
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Expert-guided adventures through pristine rainforests, wildlife encounters, and unforgettable experiences in the heart of Central America's natural paradise
              </p>
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href="#tours" 
                className="group px-8 py-4 bg-jungle-500 hover:bg-jungle-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg hover:scale-105 transform"
              >
                <span className="flex items-center gap-3 justify-center">
                  Explore Our Tours
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              <button 
                onClick={handleBookNow}
                className="group px-8 py-4 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg hover:scale-105 transform"
              >
                <span className="flex items-center gap-3 justify-center">
                  Book Now
                  <span className="group-hover:scale-110 transition-transform duration-300">✨</span>
                </span>
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 inline-block border border-white/20 shadow-xl">
                <p className="text-white/95 text-lg font-medium mb-2">
                  Premium tours curated by
                </p>
                <p className="text-white font-bold text-xl">
                  Top Tours Costa Rica
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>Expert Guides</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span>🌿</span>
                    <span>Eco-Friendly</span>
                  </span>
                  <span>•</span>
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
      <section id="tours" className="py-20 bg-gradient-to-b from-jungle-50 to-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-jungle-900 mb-4">
              Our Premium Tours
            </h2>
            <div className="h-1 w-24 bg-jungle-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-jungle-700 max-w-3xl mx-auto leading-relaxed">
              Experience the best of Costa Rica with our carefully curated selection of tours, 
              designed to showcase the country's incredible biodiversity and natural wonders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <TourCard 
                key={index} 
                title={tour.title}
                description={tour.description}
                image={tour.image}
                price={tour.price}
                duration={tour.duration}
                highlights={tour.highlights}
                times={tour.times}
                operatorLogo={tour.operatorLogo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Sloths Section */}
      <section id="sloths" className="py-20 bg-sloth-50/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-sloth-900 mb-4">
              Wildlife Spotlight: Sloths
            </h2>
            <div className="h-1 w-24 bg-sloth-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png"
                alt="Two-fingered sloth" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-lg text-sloth-800 leading-relaxed">
                Sloths are among Costa Rica's most beloved creatures, known for their gentle nature and arboreal lifestyle. They primarily live in the rainforests and are perfectly adapted to life in the trees.
              </p>
              <p className="text-lg text-sloth-800 leading-relaxed">
                There are two types of sloths: two-fingered and three-fingered. Both are incredibly adapted to life in the trees, with specialized claws for hanging onto branches.
              </p>
              <p className="text-lg text-sloth-800 leading-relaxed">
                On our sloth tours, you can observe these amazing creatures in their natural habitat and learn about their unique adaptations and conservation status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-jungle-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-24 bg-jungle-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-jungle-800 mb-3">
                  What should I bring on the tours?
                </h3>
                <p className="text-lg text-jungle-700 leading-relaxed">
                  We recommend bringing comfortable walking shoes, rain gear, insect repellent, and a camera to capture the amazing sights.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-jungle-800 mb-3">
                  Are the tours suitable for children?
                </h3>
                <p className="text-lg text-jungle-700 leading-relaxed">
                  Yes, our tours are family-friendly! Many of our tours welcome children, and children are free on the Sloth Tour. We ensure a safe and educational experience for all ages.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-jungle-800 mb-3">
                  What is the best time for wildlife viewing?
                </h3>
                <p className="text-lg text-jungle-700 leading-relaxed">
                  Wildlife is active throughout the day, but many animals are easier to spot during the cooler morning hours or during our special night tours.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-jungle-800 mb-3">
                  How can I book a tour?
                </h3>
                <p className="text-lg text-jungle-700 leading-relaxed">
                  You can book a tour by contacting Top Tours Costa Rica via WhatsApp at +506 6150 0559 or by email at toptourscostarica@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-b from-sloth-100 to-sloth-200">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-sloth-900">
              Book Your Costa Rican Adventure Today!
            </h2>
            <div className="h-1 w-24 bg-sloth-500 mx-auto rounded-full"></div>
            <p className="text-xl text-sloth-800 leading-relaxed">
              Ready to experience the wonders of Costa Rica? Book your tour now and create unforgettable memories.
            </p>
            <p className="text-lg text-sloth-700">
              <strong>Top Tours Costa Rica</strong> - Your trusted partner for authentic Costa Rican adventures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={handleBookNow}
                className="px-8 py-4 bg-sloth-500 hover:bg-sloth-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg hover:scale-105 transform"
              >
                Contact via WhatsApp
              </button>
              <a 
                href="mailto:toptourscostarica@gmail.com" 
                className="px-8 py-4 bg-jungle-500 hover:bg-jungle-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg hover:scale-105 transform"
              >
                Email Us
              </a>
            </div>
            <p className="text-sloth-700 text-lg">
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
