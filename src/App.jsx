import {BrowserRouter} from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas} from './components';

const App=() => {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 '
        style={{ background: 'oklch(17.76% 0 0)' }}>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          {/* <Feedbacks/> */}
          <div className='relative z-0'>
            <Contact/>
            {/* <StarsCanvas/> */}
          </div>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
