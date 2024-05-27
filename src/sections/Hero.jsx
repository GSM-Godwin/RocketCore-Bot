'use client'
import Image from "next/image"
import telegram from "../../public/assets/hero-telegram.svg"
import rocket from "../../public/assets/herorocket.svg"
import telegrambg from "../../public/assets/hero-telegram-bg.svg"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

const Hero = () => {
  const ref = useRef(null)

  return (
    <motion.div id="hero" className="lg:h-[85vh] px-5 md:px-10 lg:flex ">
      <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
         className="flex flex-col flex-[7] relative items-center lg:items-start">
        <h3 className="text-[32px] md:text-[72px] lg:leading-[72px] xl:text-[100px] font-semibold xl:leading-[110px]">Start Trading <br />Defi On-Chain</h3>
        <p className="text-center lg:text-start text-[12px] md:text-[16px] lg:text-[12px] font-medium text-[#DEDEDE]">Enjoy a synchronised and seamless trading experience across all devices.</p>
        <div className="flex gap-5 items-start mt-5 lg:mt-10">
          <button className="bg-[#0067FF] rounded-full text-[12px] xl:text-[16px] px-4 py-2">Telegram bot</button>
          <button className="bg-transparent border-[1px] text-[12px] xl:text-[16px] transition-all border-white hover:bg-[#0067FF] hover:border-[#0067FF] rounded-full px-4 py-2">Documentation</button>
        </div>
        <motion.div animate={{
        y: [0, -20, 0], // Move up and down
        x: [0, -10, 10, 0], // Sway left and right
        rotate: [0, 1, -1, 0], // Slight rotation
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }} className="flex lg:absolute my-[-40px]  lg:right-[-190px] lg:top-11">
          <Image src={rocket} width={700} />
        </motion.div>
      </motion.div>
      <motion.div animate={{
        y: [0, -8, 0], // Move up and down
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }} className="flex flex-[5] bg-cover relative"  style={{ backgroundImage: `url(/assets/hero-telegram-bg.svg)`, backgroundRepeat: 'no-repeat' }}>
        <Image src={telegram} className="w-full h-[85vh] z-10" />
        <Image src={telegrambg} className="absolute top-[230px] md:hidden lg:top-[100px] lg:right-0 w-[700px] lg:w-[500px]" />
      </motion.div>
    </motion.div>
  )
}

export default Hero