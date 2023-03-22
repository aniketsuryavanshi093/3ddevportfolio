import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../style";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { fadeIn, textVariant } from "../utils/Motion";
import { experiences } from '../Constants';
import { SectionWrapper } from "../hoc/index"

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far!</p>
        <h2 className={styles.sectionHeadText}> Work Experience. </h2>
      </motion.div>
      <div className='mt-20 flex flex-col '>
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))
          }
        </VerticalTimeline>

      </div>
    </>
  )
}
const ExperienceCard = ({ key, experience }) => {
  return (
    <VerticalTimelineElement key={key} contentStyle={{ background: "#1d1836", color: "#fff" }}
      date={experience.date} iconStyle={{ background: experience.iconBg }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      icon={<div className='justify-center items-center w-full h-full flex'><img alt='ess' className='w-[60%] h-[60%] object-contain' src={experience.icon} /></div>}
    >
      <div >
        <h3 className='text-white text-[23px] font-bold'>
          {experience.title}
        </h3>
        <p className='text-secondary m-0 text-[16px] font-semibold' style={{ margin: 0 }}> {experience.company_name} </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experience.points.map((point, index) => (
            <li key={`${index}pointad`} className='text-white-100 text-[14px] pl-1 tracking-wider '>
              {point}
            </li>
          ))
        }
      </ul>
    </VerticalTimelineElement>
  )
}
export default SectionWrapper(Experience, "experience")