import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import {motion} from 'framer-motion'
import { style } from '../style'
import { experiences } from '../constant'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { DecoderText } from './decoder_text/decoder-text';


const ExperienceCard =({experience})=>(
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff'}}
      contentArrowStyle={{
        borderRight: '7px solid  #232631',
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img src={experience.icon} alt="" />
        </div>
      }
    >
      <div>
        <h3 className=" text-white text-[24px] font-bold"> {experience.title} </h3>
        <p className='text-secondary font-semibold text-[16px]' style={{margin:0}} >
        {experience.company_name}
            </p>
      
      </div>
    </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div>
      <p className={`${style.sectionSubText}`}>What i have done so far</p>
        <h2>
        <DecoderText className={`${style.sectionHeadText}`} text='Experience.' delay={300} />
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience,index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience,'work')