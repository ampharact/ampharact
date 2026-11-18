import React, { useRef, useEffect, useState } from 'react';

const AnimatedSection = ({ children, className = '', animation = 'fadeInUp', delay = 0, threshold = 0.15, once = true }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const baseStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0,0)' : animation === 'slideInLeft' ? 'translateX(-32px)' : animation === 'slideInRight' ? 'translateX(32px)' : 'translateY(24px)',
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={baseStyle}>
      {children}
    </div>
  );
};

export default AnimatedSection;
