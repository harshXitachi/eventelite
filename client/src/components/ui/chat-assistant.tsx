import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChatMessage {
  type: "user" | "bot";
  text: string;
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      text: "Hello! I'm your EventElite assistant. How can I help you with your event planning today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Auto-open chat after 10 seconds if not explicitly closed
    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      type: "user",
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, {
        type: "bot",
        text: botResponse,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (query: string): string => {
    // Simple responses based on keywords
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("pricing") || lowerQuery.includes("cost") || lowerQuery.includes("quote")) {
      return "For detailed pricing information, I recommend using our Budget Calculator or contacting us directly at +91 9785520040. Every event is unique, and we provide customized quotes based on your specific requirements.";
    }
    
    if (lowerQuery.includes("wedding") || lowerQuery.includes("marriage")) {
      return "EventElite specializes in creating magical wedding experiences! Our wedding planning services include venue selection, decor, catering, entertainment, and day-of coordination. Would you like to schedule a consultation with our wedding specialist?";
    }
    
    if (lowerQuery.includes("corporate") || lowerQuery.includes("conference")) {
      return "Our corporate event services include conferences, product launches, team-building events, and award ceremonies. We ensure professional execution with attention to your brand identity and business objectives.";
    }
    
    if (lowerQuery.includes("contact") || lowerQuery.includes("call") || lowerQuery.includes("speak")) {
      return "You can reach us at +91 9785520040 or send a WhatsApp message. Alternatively, fill out the contact form on our website, and one of our event specialists will get back to you promptly.";
    }
    
    if (lowerQuery.includes("location") || lowerQuery.includes("address") || lowerQuery.includes("where")) {
      return "We're based in Jaipur and Delhi NCR, but we organize events throughout India. Would you like information about a specific venue or location?";
    }
    
    if (lowerQuery.includes("job") || lowerQuery.includes("hiring") || lowerQuery.includes("work") || lowerQuery.includes("volunteer")) {
      return "We're actively hiring for event management positions! Check out the 'We Are Hiring' section on our homepage to learn about volunteer opportunities and submit your application.";
    }
    
    return "Thank you for your message. For personalized assistance with your event planning needs, please feel free to contact us directly via WhatsApp at +91 9785520040 or use our contact form.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <Button 
        onClick={toggleChat}
        variant="default"
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        aria-label="Chat with AI Assistant"
      >
        <i className={`${isOpen ? "fas fa-times" : "fas fa-comment-dots"} text-xl`}></i>
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <Card className={cn(
          "absolute bottom-20 right-0 w-80 sm:w-96 shadow-xl transition-all duration-300 overflow-hidden",
          isMinimized ? "h-16" : "h-[500px] max-h-[80vh]"
        )}>
          {/* Chat header */}
          <div 
            className="bg-primary text-white p-4 cursor-pointer flex justify-between items-center"
            onClick={toggleMinimize}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h3 className="font-semibold">EventElite Assistant</h3>
                <p className="text-xs text-white/80">Online | 24/7 Support</p>
              </div>
            </div>
            <button className="text-white/80 hover:text-white">
              <i className={`fas ${isMinimized ? "fa-chevron-down" : "fa-chevron-up"} text-sm`}></i>
            </button>
          </div>
          
          {!isMinimized && (
            <>
              {/* Chat messages */}
              <div className="p-4 h-[calc(100%-144px)] overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div 
                        className={cn(
                          "max-w-[80%] rounded-lg p-3 shadow-sm",
                          message.type === "user" 
                            ? "bg-primary text-white rounded-br-none" 
                            : "bg-white text-gray-800 rounded-bl-none"
                        )}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 rounded-lg rounded-bl-none max-w-[80%] p-3 shadow-sm">
                        <div className="flex space-x-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Chat input */}
              <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
                <div className="flex gap-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="resize-none"
                    rows={1}
                  />
                  <Button type="submit" variant="default" size="icon" className="h-10 w-10">
                    <i className="fas fa-paper-plane text-sm"></i>
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  For complex inquiries, please contact us directly at +91 9785520040
                </p>
              </form>
            </>
          )}
        </Card>
      )}
    </div>
  );
};

export default ChatAssistant;