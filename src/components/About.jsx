import React from 'react'
import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/Motion";
import { services } from '../Constants';
import { SectionWrapper } from "../hoc/index"
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview. </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}
const ServiceCard = ({ index, title, item, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div className='w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]' variants={fadeIn("right", "spring", .5 * index, .75)}>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly flex-col items-center min-h-[280px]' >
          <img src={icon} className="object-contain w-16 h-16" />
          <h3 className='text-white font-bold text-center text-[20px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
export default SectionWrapper(About, "about")