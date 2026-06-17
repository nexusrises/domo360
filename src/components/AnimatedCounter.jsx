import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ target, prefix = '', suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const end = parseFloat(target);
    if (isNaN(end)) {
      return;
    }

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing de salida (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * end;
      
      // Redondear al entero más cercano para evitar saltos raros si es entero
      if (Number.isInteger(end)) {
        setCount(Math.floor(currentValue));
      } else {
        setCount(currentValue.toFixed(1));
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}
