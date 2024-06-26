'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import twitter from "../../public/assets/twitter.svg"
import telegram from "../../public/assets/telegram.svg"
import goto from "../../public/assets/goto.svg"
import line from "../../public/assets/line.svg"
import { useRef } from "react"

const Join = () => {
  const ref = useRef(null)
  const { scrollYProgress} = useScroll({
    target: ref,
    offset : ["0 1", "0.7 1"]
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{scale: scaleProgress, opacity: opacityProgress}} className=" flex flex-col items-center justify-center lg:mt-28 xl:mt-48 px-5 lg:px-10">
      <h4 className="flex justify-center text-[32px] text-center lg:text-[52px] mt-10 font-medium">Join Our Community</h4>
      <div className="flex flex-col md:flex-row gap-3 lg:gap-10 my-5 lg:my-10 justify-center">
        <div className="flex items-center gap-2">
          <Image src={twitter} />
          <p className="text-[12px] md:text-[16px]">X(Formerly Twitter)</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={telegram} />
          <p className="text-[12px] md:text-[16px]">Telegram</p>
        </div>
        <button className="flex items-center gap-3 rounded-lg justify-between py-2 px-3 bg-[#0067FF]">
          Telegram bot
          <Image src={goto} />
        </button>
      </div>
      <div className="flex items-center justify-center mb-10">
        <Image src={line} />
      </div>
    </motion.div>
  )
}

export default Join