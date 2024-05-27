'use client'
import Image from "next/image"
import about from "../../public/assets/about.svg"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress} = useScroll({
    target: ref,
    offset : ["0 1", "0.7 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className="z-10 flex flex-col items-center border-[1px] border-[#0067FF] border-dashed mt-10 md:mt-20 lg:mt-32 rounded-3xl mx-5 lg:mx-10">
      <h4 className="text-[32px] md:text-[52px] font-medium xl:text-[68px]">About Us</h4>
      <p className="text-[12px] md:text-[16px] xl:text-[20px] font-medium text-center"><span className="text-[#0067FF]">Rocket Core</span> is an advanced trading and sniping bot designed to streamline token <br /> trading across  Core blockchain network</p>
      <motion.div animate={{
        y: [0, -8, 0], // Move up and down
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}>
        <Image src={about} />
      </motion.div>
    </motion.div>
  )
}

export default About