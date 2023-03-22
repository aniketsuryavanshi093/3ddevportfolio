import React from 'react'
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] '>
      <div className={`bg-tertiary cursor px-7 py-9 rounded-2xl `}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`pb-10 flex flex-wrap gap-7 mt-2 ${styles.padding}`} >
        {
          testimonials.map((testimonial, index) => (
            <FeedbackCard key={`testimonial-${index}`} {...testimonial} />
          ))
        }
      </div>
    </div>
  )
}
const FeedbackCard = ({ index, testimonial, name, company, image, designation }) => {
  return (
    <motion.div variants={fadeIn('', 'spring', index * 0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl w-full xs:w-[320px]'>
      <p className='text-[48px] font-black text-white-100 '>"</p>
      <div className='mt-1'>
        <p>{testimonial}</p>
        <div className='flex mt-7 justify-center items-center flex-row '>
          <div className='flex flex-1 flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-variant'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <img src={image} className='object-cover w-10 h-10 rounded-full ' />
        </div>
      </div>
    </motion.div>
  )

}
export default SectionWrapper(Feedbacks, 'feedback')