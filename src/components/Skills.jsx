import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { skills } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionWrapper } from '../hoc';

const SkillCard = ({ index, title, subDescription1, subDescription2, subDescription3, subDescription4, subDescription5 }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", 0.5 * index, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      // key={skill.title}
    >
      <p className="text-white font-black text-[48px]">{title}</p>
      <p className="mt-5 text-secondary text-[18px]">{subDescription1}</p>
      <p className="mt-5 text-secondary text-[18px]">{subDescription2}</p>
      <p className="mt-5 text-secondary text-[18px]">{subDescription3}</p>
      <p className="mt-5 text-secondary text-[18px]">{subDescription4}</p>
      <p className="mt-5 text-secondary text-[18px]">{subDescription5}</p>
    </motion.div> 
  )
}

const Skills = () => {
  return (
    <>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`${styles.padding} bg-tertiary rounded-2xl`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What I can do</p>
            <h2 className={`${styles.sectionHeadText} mt-4`}>Skills.</h2>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} mt-10 pb-14 flex flex-wrap gap-10`}>
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} index={index} {...skill} />
          ))}
        </div>
      </div>
    </>
  )
}

export default sectionWrapper(Skills, "skills");