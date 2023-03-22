import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../style";
import { staggerContainer } from '../utils/Motion';
const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span id={idName} className="hash-span" >&nbsp;</span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper