import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from '../constant';

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (isMobile) {
    return (
      <div className='flex flex-row flex-wrap justify-center gap-6'>
        {technologies.map((technology) => (
          <div key={technology.name} className='w-20 h-20 flex flex-col items-center gap-2'>
            <img src={technology.icon} alt={technology.name} className='w-16 h-16 object-contain' loading="lazy" decoding="async" />
            <p className='text-secondary text-[11px] text-center'>{technology.name}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
