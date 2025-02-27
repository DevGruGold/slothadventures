
import { useState, useRef, useEffect } from 'react';
import { generateSlothResponse, simulateTyping } from '@/utils/chatbotUtils';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const SlothChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: "Hello there! I'm Sammy the Sloth, your guide to Sloth Park. How can I help you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Show greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ 
        role: 'assistant', 
        content: "Hello there! I'm Sammy the Sloth, your guide to Sloth Park. How can I help you today?" 
      }]);
    }
  }, [isOpen, messages.length]);

  // Show initial chatbot prompt with animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isTyping) return;
    
    // Add user message
    const userMessage = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Generate AI response
    generateSlothResponse(
      userMessage.content,
      setIsTyping, 
      (partialResponse) => {
        setMessages(prev => {
          const newMessages = [...prev];
          // Check if we already added a response message
          const lastMessage = newMessages[newMessages.length - 1];
          
          if (lastMessage && lastMessage.role === 'assistant') {
            // Update the existing response
            newMessages[newMessages.length - 1] = {
              ...lastMessage,
              content: partialResponse
            };
          } else {
            // Add a new response message
            newMessages.push({
              role: 'assistant',
              content: partialResponse
            });
          }
          
          return newMessages;
        });
      }
    );
  };

  // Sample quick questions
  const quickQuestions = [
    "What types of sloths can I see?",
    "How much is the sloth tour?",
    "When do tours start?",
    "Tell me about the Adventure Combo"
  ];

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    // Submit with a slight delay to show the input change
    setTimeout(() => {
      handleSubmit({ preventDefault: () => {} } as React.FormEvent);
    }, 100);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Chat button (always visible) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-40 flex items-center justify-center shadow-lg rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? 'w-12 h-12 bg-jungle-500 hover:bg-jungle-600' : 'w-16 h-16 bg-white hover:bg-gray-100'
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat with Sammy the Sloth"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/0d5c88f1-79c0-4137-a69a-6c03604c189e.png" 
              alt="Sloth avatar" 
              className="w-10 h-10 object-cover rounded-full" 
            />
            <span className="text-xs mt-1 text-jungle-800 font-medium">Chat</span>
          </div>
        )}
      </button>
      
      {/* Initial greeting bubble (shows only when chat is closed) */}
      {!isOpen && (
        <div className={`fixed bottom-24 right-4 z-40 chat-bubble w-64 animate-fade-in transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-sm font-medium text-jungle-800">
            Hi there! I'm Sammy the Sloth. Ask me about our tours!
          </p>
          <button 
            onClick={() => setIsOpen(true)}
            className="mt-2 text-xs font-medium text-jungle-500 hover:text-jungle-600"
          >
            Start chatting →
          </button>
        </div>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div 
          ref={chatRef}
          className={`fixed bottom-20 right-4 z-40 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 transition-all duration-300 ease-in-out animate-slide-in ${
            isExpanded ? 'h-[80vh]' : 'h-[450px]'
          }`}
        >
          {/* Close button (larger, more obvious) */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 bg-jungle-500 hover:bg-jungle-600 text-white p-2 rounded-full shadow-md transition-colors z-50"
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/0d5c88f1-79c0-4137-a69a-6c03604c189e.png" 
                alt="Sammy the Sloth" 
                className="w-10 h-10 rounded-full object-cover border-2 border-jungle-100" 
              />
              <div>
                <h3 className="font-medium text-jungle-800">Sammy the Sloth</h3>
                <p className="text-xs text-jungle-500">Sloth Park Guide</p>
              </div>
            </div>
            <button 
              onClick={toggleExpand}
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
            >
              {isExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5 5 5M7 17l5-5 5 5" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Messages container */}
          <div className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 145px)' }}>
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`mb-4 ${
                  message.role === 'user' 
                    ? 'flex justify-end' 
                    : 'flex justify-start'
                }`}
              >
                <div 
                  className={`max-w-[80%] rounded-xl p-3 ${
                    message.role === 'user'
                      ? 'bg-jungle-500 text-white'
                      : 'bg-gray-100 text-jungle-800'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 text-jungle-800 max-w-[80%] rounded-xl p-3">
                  <p className="text-sm loading-dots">Typing</p>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick questions */}
          <div className="px-4 py-2 overflow-x-auto whitespace-nowrap flex gap-2 border-t border-gray-100">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                disabled={isTyping}
                className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-jungle-800 rounded-full whitespace-nowrap transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
          
          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                placeholder="Ask about our tours..."
                className="flex-1 py-2 px-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-jungle-500 text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className={`p-2 rounded-full ${
                  !input.trim() || isTyping
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-jungle-500 text-white hover:bg-jungle-600'
                } transition-colors`}
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SlothChatbot;
