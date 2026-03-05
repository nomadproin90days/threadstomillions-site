import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
  value: number;
  label: string;
}

const CountUp: React.FC<CountUpProps> = ({ value, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl ttm-gradient-text">
      {displayValue}
      {label}
    </span>
  );
};

export default CountUp;
