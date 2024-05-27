'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import left from "../../public/assets/left.svg"
import right from "../../public/assets/right.svg"
import { useRef } from "react"

const Sss = () => {
  const ref = useRef(null)
  const { scrollYProgress} = useScroll({
    target: ref,
    offset : ["0 1", "0.7 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className="flex flex-col mx-5 lg:mx-10 items-center border-[1px] border-[#0067FF] border-dashed mt-16 lg:mt-32 rounded-3xl">
      <h4 className="text-[32px] text-center md:text-[52px] font-medium xl:text-[68px]">Swap & Snipe, Safely.</h4>
      <p className="text-[12px] md:text-[16px] xl:text-[20px] font-medium text-center"><span className="text-[#0067FF]">Rocket Core</span> is an advanced trading and sniping bot designed to streamline token <br /> trading across  Core blockchain network</p>
      <motion.div animate={{
        y: [0, -8, 0], // Move up and down
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }} className="flex flex-col lg:flex-row justify-evenly my-4">
        <Image src={left} className="lg:w-[47%] h-full" />
        <Image src={right} className="lg:w-[47%] h-full" />
      </motion.div>
    </motion.div>
  )
}

export default Sss