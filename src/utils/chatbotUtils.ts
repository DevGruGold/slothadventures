
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Tour information that the AI can reference
const tourInfo = {
  slothTour: {
    name: "Sloth Tour",
    description: "An up-close encounter with both two and three-fingered sloths in their natural habitat.",
    details: [
      "Tours run every hour",
      "See both types of sloths (two and three-fingered)",
      "Viewing scopes provided",
      "Informative guide included",
      "90 minute experience",
      "Children are free",
      "Price: $60 per person"
    ]
  },
  chocolateCoffeeTour: {
    name: "Chocolate, Coffee & Sugarcane Tour",
    description: "Learn about and taste local chocolate, coffee, and sugarcane products.",
    details: [
      "90 minute additional experience",
      "Can be added to Sloth Tour",
      "Price: $35 more per person"
    ]
  },
  combo1: {
    name: "Adventure Combo",
    description: "Our thrilling adventure combo includes multiple exciting activities.",
    details: [
      "ATV riding",
      "White Water Rafting",
      "Waterfall hike",
      "Hot Springs access",
      "Volcanic mud bath",
      "Starts any time",
      "Full day experience"
    ]
  },
  combo2: {
    name: "Volcano & Hanging Bridges Combo",
    description: "Explore volcanic landscapes and walk across stunning hanging bridges.",
    details: [
      "Morning Volcano hike",
      "Mistico Hanging Bridges",
      "Lunch included",
      "Transportation provided",
      "Morning tours start at 10:20am",
      "Afternoon tours with lunch start at 1:40pm"
    ]
  },
  rioCeleste: {
    name: "Rio Celeste Tour",
    description: "Explore the magical blue waters of Rio Celeste and its stunning waterfall.",
    details: [
      "Guided hike",
      "Waterfall viewing",
      "Lunch included",
      "Departs at 7:30am"
    ]
  },
  zipline: {
    name: "Zipline Adventure",
    description: "Soar through the jungle canopy on thrilling ziplines.",
    details: [
      "Runs all day until 3pm",
      "Multiple zipline cables",
      "Stunning views of the forest"
    ]
  },
  hangingBridges: {
    name: "Hanging Bridges Tour",
    description: "Walk among the treetops on suspended bridges with incredible views.",
    details: [
      "Tours leave at 8:30am and 1:30pm",
      "Guided experience",
      "Bird and wildlife spotting opportunities"
    ]
  }
};

// Common questions and answers about the park
const faqInfo = [
  {
    question: "What types of sloths can I see?",
    answer: "At Sloth Park, you can see both two-fingered and three-fingered sloths in their natural habitat."
  },
  {
    question: "How long is the sloth tour?",
    answer: "The sloth tour is a 90-minute experience that runs every hour."
  },
  {
    question: "Do you have discounts for children?",
    answer: "Yes! Children can join our sloth tours for free."
  },
  {
    question: "What is the best time to see sloths?",
    answer: "Sloths can be seen throughout the day, but they are often more active in the morning and late afternoon."
  },
  {
    question: "Can I take photos during the tour?",
    answer: "Yes, photography is allowed and encouraged! We provide viewing scopes to help you get a better look at the sloths."
  }
];

// Helper function to simulate AI thinking and typing
export const simulateTyping = (text: string, callback: (text: string) => void) => {
  const words = text.split(' ');
  let currentText = '';
  let wordIndex = 0;
  
  // Calculate a variable delay based on text length (slower for short responses, slightly faster for longer ones)
  const baseDelay = Math.max(30, 80 - Math.min(50, text.length / 20));
  
  const typeNextWord = () => {
    if (wordIndex < words.length) {
      currentText += (wordIndex > 0 ? ' ' : '') + words[wordIndex];
      callback(currentText);
      wordIndex++;
      
      // Add variable timing between words for natural effect
      const variableDelay = baseDelay + Math.random() * 30;
      setTimeout(typeNextWord, variableDelay);
    }
  };
  
  // Simulate thinking time before starting to type
  const thinkingTime = 800 + Math.random() * 1200;
  setTimeout(typeNextWord, thinkingTime);
};

// Function to generate a response based on user input
export const generateSlothResponse = (userMessage: string, setIsTyping: (typing: boolean) => void, callback: (response: string) => void) => {
  setIsTyping(true);
  
  // Convert message to lowercase for easier matching
  const message = userMessage.toLowerCase();
  
  // Prepare response based on user query
  let response = "";
  
  // Greeting patterns
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message === 'hola') {
    response = "Hello there! I'm Sammy the Sloth, your guide to Sloth Park. I move slowly, but I'm full of information! What would you like to know about our tours or our sloths?";
  } 
  // Questions about sloths
  else if (message.includes('sloth') && (message.includes('type') || message.includes('kind') || message.includes('species'))) {
    response = "At Sloth Park, you can see both two-fingered and three-fingered sloths in their natural habitat. The two types have different behaviors and appearances, which our guides will happily point out during your tour!";
  }
  else if (message.includes('sloth') && message.includes('tour')) {
    response = `Our Sloth Tour is a 90-minute experience that runs every hour. You'll get to see both two and three-fingered sloths, use our viewing scopes, and learn from our informative guides. The tour costs $60 per person, and children are free!`;
  }
  // Questions about tour times
  else if (message.includes('time') && message.includes('sloth')) {
    response = "Our sloth tours run every hour throughout the day, giving you plenty of opportunities to join us!";
  }
  else if (message.includes('time') && message.includes('chocolate')) {
    response = "The Chocolate, Coffee, and Sugarcane tour is an additional 90-minute experience that can be added to your Sloth Tour for $35 more per person.";
  }
  else if (message.includes('time') && message.includes('combo 1') || message.includes('adventure combo')) {
    response = "Our Adventure Combo (Combo 1) includes ATV, White Water Rafting, a Waterfall hike with Hot Springs, and a Volcanic mud bath. This exciting experience can start any time!";
  }
  else if (message.includes('time') && message.includes('combo 2') || message.includes('volcano')) {
    response = "Our Volcano and Hanging Bridges Combo (Combo 2) offers morning hikes starting at 10:20am, and afternoon hikes with lunch starting at 1:40pm.";
  }
  else if (message.includes('time') && message.includes('rio celeste')) {
    response = "The Rio Celeste tour and hike with waterfall and lunch leaves at 7:30am.";
  }
  else if (message.includes('time') && message.includes('zipline')) {
    response = "Our Zipline adventure runs all day until 3pm.";
  }
  else if (message.includes('time') && message.includes('hanging bridge')) {
    response = "The Hanging Bridges tours leave at 8:30am and 1:30pm.";
  }
  // Price inquiries
  else if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    if (message.includes('sloth')) {
      response = "The Sloth Tour costs $60 per person, and children are free!";
    } else if (message.includes('chocolate') || message.includes('coffee')) {
      response = "Adding the Chocolate, Coffee, and Sugarcane tour to your Sloth Tour costs an additional $35 per person.";
    } else if (message.includes('all') || message.includes('everything')) {
      response = "Our tour prices vary: Sloth Tour is $60 per person (children free), adding Chocolate & Coffee Tour is $35 more. We have various combo packages as well - would you like specific pricing for any particular tour?";
    } else {
      response = "We have various tour options at different price points. The Sloth Tour is $60 per person with children free. Would you like pricing for a specific tour?";
    }
  }
  // Child-related questions
  else if (message.includes('child') || message.includes('kid') || message.includes('children')) {
    response = "Good news for families! Children can join our sloth tours for free. It's a wonderful educational experience for kids of all ages.";
  }
  // General tour questions
  else if (message.includes('tour') || message.includes('package') || message.includes('experience')) {
    response = "We offer a variety of tours including our popular Sloth Tour, Chocolate & Coffee Tour, Adventure Combo, Volcano & Hanging Bridges Combo, Rio Celeste Tour, Zipline Adventure, and Hanging Bridges Tour. Which one would you like to know more about?";
  }
  // Questions about facilities and amenities
  else if (message.includes('food') || message.includes('eat') || message.includes('restaurant') || message.includes('lunch')) {
    response = "Some of our tours include meals, such as the Volcano & Hanging Bridges Combo and Rio Celeste Tour which include lunch. We also have a small café at our visitor center where you can purchase snacks and refreshments.";
  }
  // Weather-related questions
  else if (message.includes('weather') || message.includes('rain') || message.includes('season')) {
    response = "Our tours operate year-round. The dry season (December to April) offers more sunshine, while the green season (May to November) brings occasional rain showers but even more vibrant jungle colors. Our guides are prepared for all weather conditions!";
  }
  // Questions about photography
  else if (message.includes('photo') || message.includes('camera') || message.includes('picture')) {
    response = "Photography is absolutely encouraged on all our tours! For sloth viewing, we provide special scopes that can help you get better shots. Our guides are happy to point out the best photo opportunities.";
  }
  // Accessibility questions
  else if (message.includes('accessible') || message.includes('wheelchair') || message.includes('disability')) {
    response = "Some of our tours are more accessible than others. The Sloth Tour has accessible viewing areas, while tours like the Hanging Bridges require more mobility. Please contact us directly about your specific needs, and we'll do our best to accommodate you.";
  }
  // Default response for unrecognized queries
  else {
    response = "I'm still learning about all the wonderful experiences at Sloth Park. Would you like to know about our Sloth Tours, other activity options, or tour times? Feel free to ask anything specific about our tours and I'll do my best to help!";
  }
  
  // Simulate typing delay and then return response
  simulateTyping(response, (partialResponse) => {
    callback(partialResponse);
    if (partialResponse === response) {
      setIsTyping(false);
    }
  });
};
