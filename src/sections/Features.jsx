'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import rocket from "../../public/assets/features-rocket.svg"
import set from "../../public/assets/set.svg"
import light from "../../public/assets/light.svg"
import UI from "../../public/assets/UI.svg"
import sim from "../../public/assets/sim.svg"
import { useRef } from "react"

const variants = {
  hiddenTopLeft: { opacity: 0, x: '-50vw', y: '-50vh' },
  hiddenTopRight: { opacity: 0, x: '50vw', y: '-50vh' },
  hiddenBottomLeft: { opacity: 0, x: '-50vw', y: '50vh' },
  hiddenBottomRight: { opacity: 0, x: '50vw', y: '50vh' },
  visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', duration: 2, bounce: 0.3 } }
}

const Features = () => {
  const ref = useRef(null)
  const { scrollYProgress} = useScroll({
    target: ref,
    offset : ["0 1", "0.7 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress}} className="flex relative mx-5 lg:mx-10 flex-col items-center mb-10">
      <Image  src={rocket} className="absolute h-full lg:h-[100vh] lg:mt-[-115px] items-center justify-center z-0" />
      <div className="bg-gradient-to-r from-[#001A41] to-[#00050B] backdrop-blur-md backdrop-brightness-110 backdrop-contrast-[50%] opacity-75 rounded-xl flex flex-col items-center z-10">
        <h4 className="text-[32px] md:text-[52px] xl:text-[68px] font-medium">Features</h4>
        <p className="font-medium text-[12px] md:text-[16px] xl:text-20px mb-5"><span className="text-[#0067FF]">Rocket Core</span> advanced features</p>
        <div className="flex flex-wrap justify-evenly">
          <motion.div             
            variants={variants}
            initial="hiddenTopLeft"
            whileInView="visible"
            viewport={{ once: true }} className="items-center backdrop-blur-md backdrop-brightness-110 backdrop-contrast-[50%] z-[1000px] justify-center text-center border-[1px] border-[#0067FF] p-5 w-[95%] md:w-[45%] rounded-2xl mb-5">
            <div className="flex justify-center items-center">
              <Image src={UI} className="w-[50px]" />
              <h5 className="text-[16px] md:text-[20px] lg:text-[32px] xl:text-[36px] font-medium">User-Friendly Interface</h5>
            </div>
            <p className="text-[10px] md:text-[16px] xl:text-20px font-medium">Get started and place a trade in seconds</p>
          </motion.div>
          <motion.div 
            variants={variants}
            initial="hiddenTopRight"
            whileInView="visible"
            viewport={{ once: true }}
            className=" items-center backdrop-blur-md backdrop-brightness-110 backdrop-contrast-[50%] z-[1000px] justify-center text-center border-[1px] border-[#0067FF] p-5 w-[95%] md:w-[45%] rounded-2xl mb-5">
            <div className="flex justify-center items-center">
              <Image src={sim} className="w-[50px]" />
              <h5 className="text-[16px] md:text-[20px] lg:text-[32px] xl:text-[36px] font-medium">Simulator</h5>
            </div>
            <p className="text-[10px] md:text-[16px] xl:text-20px font-medium">Make fast, informed trading decisions pre-launch </p>
          </motion.div>
          <motion.div 
            variants={variants}
            initial="hiddenTopLeft"
            whileInView="visible"
            viewport={{ once: true }}
            className=" items-center backdrop-blur-md backdrop-brightness-110 backdrop-contrast-[50%] z-[1000px] justify-center text-center border-[1px] border-[#0067FF] p-5 w-[95%] md:w-[45%] rounded-2xl mb-5">
            <div className="flex justify-center items-center">
              <Image src={set} className="w-[50px]" />
              <h5 className="text-[16px] md:text-[20px] lg:text-[32px] xl:text-[36px] font-medium">Intuitive Settings</h5>
            </div>
            <p className="text-[10px] md:text-[16px] xl:text-20px font-medium">Beginners love our trading bot presets.</p>
          </motion.div>
          <motion.div 
            variants={variants}
            initial="hiddenTopRight"
            whileInView="visible"
            viewport={{ once: true }}
            className=" items-center backdrop-blur-md backdrop-brightness-110 backdrop-contrast-[50%] z-[1000px] justify-center text-center border-[1px] border-[#0067FF] p-5 w-[95%] md:w-[45%] rounded-2xl mb-5">
            <div className="flex justify-center items-center">
              <Image src={light} className="w-[50px]" />
              <h5 className="text-[16px] md:text-[20px] lg:text-[32px] xl:text-[36px] font-medium">Lightning-Fast Execution</h5>
            </div>
            <p className="text-[10px] md:text-[16px] xl:text-20px font-medium">We are obsessed with shaving off every millisecond.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Features