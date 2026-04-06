import { Suspense, lazy } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Hero from './components/Hero';

const About      = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Tech       = lazy(() => import('./components/Tech'));
const Works      = lazy(() => import('./components/Works'));
const Contact    = lazy(() => import('./components/Contact'));

const App=() => {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 '
        style={{ background: 'oklch(17.76% 0 0)' }}>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

            <Hero/>
          </div>
          <Suspense fallback={<div className="h-screen" />}>
            <About/>
          </Suspense>
          <Suspense fallback={<div className="h-screen" />}>
            <Experience/>
          </Suspense>
          <Suspense fallback={<div className="h-screen" />}>
            <Tech/>
          </Suspense>
          <Suspense fallback={<div className="h-screen" />}>
            <Works/>
          </Suspense>
          {/* <Feedbacks/> */}
          <div className='relative z-0'>
            <Suspense fallback={<div className="h-screen" />}>
              <Contact/>
            </Suspense>
            {/* <StarsCanvas/> */}
          </div>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
