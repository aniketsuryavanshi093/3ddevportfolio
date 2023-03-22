import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import emailjs from '@emailjs/browser'
import { EarthCanvas } from './canvas'

// template_z6xt0t8
// service_qhrf38f
// BDJMX97NFEmlyf7fN


const Contact = () => {
  const formref = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      const response = await emailjs.send('service_qhrf38f', 'template_z6xt0t8', {
        from_name: form.name,
        from_email: form.email,
        to_name: 'Aniket',
        to_email: 'aniketsuryavanshi093@gmail.com',
        message: form.message
      },
        'BDJMX97NFEmlyf7fN'
      )
      setLoading(false)
      setForm({
        name: '',
        email: '',
        message: '',
      })
      alert('Thank you i will get back to you as soon as possible.')
    } catch (error) {
      setLoading(false)
      console.log(error, 'error')
      alert('something went wrong!')
    }
  }
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formref}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, 'contact')