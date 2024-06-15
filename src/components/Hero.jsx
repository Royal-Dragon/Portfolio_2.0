
import { DecoderText } from './decoder_text/decoder-text';
import React from 'react';
import { motion } from 'framer-motion';
import { Suspense,lazy } from 'react';
import { style } from '../style';
import { Typewriter} from 'react-simple-typewriter';
import ComputersCanvas from './canvas/Computers';  
import Scroll from './canvas/scroll';
import  './intro.css';
import Navbar from './Navbar';
import config from '../config.json'

const DisplacementSphere = lazy(() =>
  import('../components/background/displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);



const Hero = () => {
  return (
    <section
      className='relative w-full h-screen mx-auto overflow-x-hidden overflow-y-hidden'
      style={{ background: 'oklch(17.76% 0 0)' }}
    > 
<Navbar/>
    
    <Suspense>
                <DisplacementSphere />
              </Suspense>
              
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-violet-500'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${style.heroHeadText}`}>Hi, I'm &nbsp;
          <span className='text-[#915eff]'>
          <Typewriter
            words={['Abhiram', 'Developer', 'Designer',]}
            loop={0}
            cursor
            typeSpeed={300}
            deleteSpeed={50}
            delaySpeed={1200}
              
          />
          </span>
          
          </h1>
          <span className={`${style.heroSubText} mt-2 text-white`} >
                <DecoderText text={config.name} delay={300} />
                <br className='sm:block hidden' />
                <DecoderText text={config.name2} delay={300} />

              </span>
          {/* <p className={`${style.heroSubText} mt-2 text-white`}>I am a full stack web developer and <br className='sm:block hidden' /> Graphic Designer</p> */}
        </div>
      </div>
      <ComputersCanvas />
      <Scroll />
      <div>

      </div>
    </section>
  );
}

export default Hero;
