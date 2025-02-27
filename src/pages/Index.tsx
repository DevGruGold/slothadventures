
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SlothChatbot from '@/components/SlothChatbot';
import TourCard from '@/components/TourCard';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

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
      times: "Tours run every hour"
    },
    
    {
      title: "Chocolate, Coffee, and Sugarcane Tour",
      description: "Indulge in a sensory experience as you explore the rich flavors of Costa Rica's finest exports.",
      image: "/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png",
      price: "$35 per person",
      duration: "90 minutes",
      highlights: [
        "Taste premium chocolate",
        "Sample local coffee",
        "Learn about sugarcane processing"
      ],
      times: "Available daily"
    },
    {
      title: "Adventure Combo",
      description: "Experience the thrill of ATV riding, white water rafting, and a waterfall hike with hot springs and a volcanic mud bath.",
      image: "/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png",
      price: "Varies",
      duration: "Full day",
      highlights: [
        "ATV adventure",
        "White water rafting",
        "Waterfall hike",
        "Hot springs and volcanic mud bath"
      ],
      times: "Starts any time"
    },
    {
      title: "Morning Volcano Hike with Mistico Hanging Bridges",
      description: "Hike a volcano in the morning and explore the rainforest canopy on the Mistico Hanging Bridges.",
      image: "/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png",
      price: "Varies",
      duration: "Full day",
      highlights: [
        "Volcano hike",
        "Mistico Hanging Bridges",
        "Lunch included",
        "Transportation included"
      ],
      times: "Starts at 10:20 AM"
    },
    {
      title: "Afternoon Volcano Hike with Mistico Hanging Bridges",
      description: "Hike a volcano in the afternoon and explore the rainforest canopy on the Mistico Hanging Bridges.",
      image: "/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png",
      price: "Varies",
      duration: "Full day",
      highlights: [
        "Volcano hike",
        "Mistico Hanging Bridges",
        "Lunch included",
        "Transportation included"
      ],
      times: "Starts at 1:40 PM"
    },
    {
      title: "Rio Celeste Tour and Hike",
      description: "Discover the stunning turquoise waters of Rio Celeste and hike to its beautiful waterfall.",
      image: "/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png",
      price: "Varies",
      duration: "Full day",
      highlights: [
        "Rio Celeste hike",
        "Waterfall visit",
        "Lunch included"
      ],
      times: "Leaves at 7:30 AM"
    },
    {
      title: "Zipline Adventure",
      description: "Soar through the rainforest canopy on an exhilarating zipline adventure.",
      image: "/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png",
      price: "Varies",
      duration: "Flexible",
      highlights: [
        "Zipline experience",
        "Stunning views"
      ],
      times: "Runs all day until 3 PM"
    },
    {
      title: "Hanging Bridges Tour",
      description: "Explore the rainforest canopy on a network of hanging bridges with breathtaking views.",
      image: "/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png",
      price: "Varies",
      duration: "Half day",
      highlights: [
        "Hanging bridges",
        "Rainforest views"
      ],
      times: "Leaves at 8:30 AM and 1:30 PM"
    },
  ];

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Chatbot */}
      <SlothChatbot />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png"
            alt="Sloth in natural habitat" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 px-4 md:px-6 text-center">
          <img 
            src="/lovable-uploads/a0569f15-d474-4939-a628-bf1204c56fb9.png"
            alt="Arenal Jungle Tours Logo"
            className="mx-auto mb-8 w-64 md:w-80 animate-fade-in"
          />
          <span className="inline-block text-white/90 bg-jungle-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Experience nature at its own pace
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-slide-in">
            Welcome to Sloth Park
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-in" style={{ animationDelay: "0.1s" }}>
            Discover the magical world of sloths and embark on unforgettable rainforest adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="#tours" 
              className="px-8 py-4 bg-jungle-500 hover:bg-jungle-600 text-white rounded-full transition-all shadow-lg hover:shadow-xl font-medium text-lg"
            >
              Explore Our Tours
            </a>
            <a 
              href="#booking" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full transition-all shadow-lg hover:shadow-xl font-medium text-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 bg-jungle-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-jungle-900 text-center mb-12">
            Our Exclusive Tours
          </h2>
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Sloths Section */}
      <section id="sloths" className="py-16 bg-sloth-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sloth-900 text-center mb-12">
            All About Sloths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/87ef11a1-fc98-403f-95ad-9fcada873789.png"
                alt="Two-fingered sloth" 
                className="sloth-photo" 
              />
            </div>
            <div>
              <p className="text-lg text-sloth-800 mb-6">
                Sloths are the world's slowest mammals, known for their gentle nature and arboreal lifestyle. They primarily live in the rainforests of Central and South America.
              </p>
              <p className="text-lg text-sloth-800 mb-6">
                There are two types of sloths: two-fingered and three-fingered. Both are incredibly adapted to life in the trees, with specialized claws for hanging onto branches.
              </p>
              <p className="text-lg text-sloth-800">
                At Sloth Park, you can observe these amazing creatures in their natural habitat and learn about their unique adaptations and conservation status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-jungle-100/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-jungle-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-jungle-800 mb-3">
                What should I bring on the tour?
              </h3>
              <p className="text-lg text-jungle-700 mb-6">
                We recommend bringing comfortable walking shoes, rain gear, insect repellent, and a camera to capture the amazing sights.
              </p>
              <h3 className="text-xl font-semibold text-jungle-800 mb-3">
                Are the tours suitable for children?
              </h3>
              <p className="text-lg text-jungle-700">
                Yes, our tours are family-friendly, and children are free on the Sloth Tour! We ensure a safe and educational experience for all ages.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-jungle-800 mb-3">
                What is the best time to see sloths?
              </h3>
              <p className="text-lg text-jungle-700 mb-6">
                Sloths are active throughout the day, but they are often easier to spot during the cooler morning hours.
              </p>
              <h3 className="text-xl font-semibold text-jungle-800 mb-3">
                How can I book a tour?
              </h3>
              <p className="text-lg text-jungle-700">
                You can book a tour online through our website or by visiting our booking office at the park entrance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-sloth-100/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sloth-900 mb-8">
            Book Your Adventure Today!
          </h2>
          <p className="text-xl text-sloth-800 max-w-2xl mx-auto mb-8">
            Ready to experience the wonders of Sloth Park? Book your tour now and create unforgettable memories.
          </p>
          <a 
            href="#" 
            className="px-8 py-4 bg-sloth-500 hover:bg-sloth-600 text-white rounded-full transition-all shadow-lg hover:shadow-xl font-medium text-lg"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
