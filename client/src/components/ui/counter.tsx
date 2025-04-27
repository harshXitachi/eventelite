import { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const Counter = ({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  className = "" 
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const step = Math.ceil(end / (duration / 15));
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 15);
      setHasAnimated(true);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration, hasAnimated]);
  
  return (
    <span ref={countRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default Counter;
