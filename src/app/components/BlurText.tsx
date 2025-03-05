'use client';

import { useRef, useEffect, useState } from 'react';
import { useSprings, animated, easings } from '@react-spring/web';
import './BlurText.css';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: any;
  animationTo?: any[];
  easing?: string;
  onAnimationComplete?: () => void;
}

const BlurText = ({
  text = '',
  delay = 100,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}: BlurTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(20px)', opacity: 0, transform: 'translate3d(0,-30px,0)' }
      : { filter: 'blur(20px)', opacity: 0, transform: 'translate3d(0,30px,0)' };

  const defaultTo = [
    {
      filter: 'blur(10px)',
      opacity: 0.7,
      transform: direction === 'top' ? 'translate3d(0,3px,0)' : 'translate3d(0,-3px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [mounted, threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next: (value: typeof defaultTo[0]) => void) => {
          for (const step of (animationTo || defaultTo)) {
            await next(step);
          }
          animatedCount.current += 1;
          if (animatedCount.current === elements.length && onAnimationComplete) {
            onAnimationComplete();
          }
        }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { 
        easing: easings.easeOutCubic,
        tension: 300,
        friction: 20,
        mass: 0.5,
      },
    }))
  );

  if (!mounted) {
    return (
      <p ref={ref} className={`blur-text ${className}`}>
        {elements.map((element, index) => (
          <span key={index} className="inline-block">
            {element === ' ' ? '\u00A0' : element}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p ref={ref} className={`blur-text ${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block"
        >
          {elements[index] === ' ' ? '\u00A0' : elements[index]}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText; 