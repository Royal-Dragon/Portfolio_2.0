import { motion } from 'framer-motion';

import { style} from '../style';
import { staggerContainer } from '../utils/motion';

const Section =(Component,idName) =>
function HOC() {
return(
<motion.section
variants={staggerContainer()}
initial="hidden"
whileInView="show"
viewport={{once:true, amount:0.25}}
className={`${style.padding} max-w-7xl mx-auto relative z-0`}
style={{ background: 'transparent',
opacity: '10' }}
>
<span className='hash-span' id={idName}>
{/* &nbsp; */}
</span>
<Component/>
</motion.section>
)

}

export default Section