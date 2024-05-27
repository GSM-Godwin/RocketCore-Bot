'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import cx from "../../public/assets/CX.svg"
import infinity from "../../public/assets/inifinity.svg"
import dexcreener from "../../public/assets/dexscreener.svg"
import sushiswap from "../../public/assets/Sushiswap.svg"
import line from "../../public/assets/line.svg"
import { useRef } from "react"

const Partners = () => {
  const ref = useRef(null)
  const { scrollYProgress} = useScroll({
    target: ref,
    offset : ["0 1", "0.7 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div style={{ scale: scaleProgress, opacity: opacityProgress }} className="flex flex-wrap relative justify-center items-center gap-5 lg:gap-9 my-10 lg:my-20">
      <Image src={cx} width={60} className="w-[50px] md:w-[75px] lg:w-[100px]" />
      <Image src={sushiswap} width={200} className="w-[150px] md:w-[225px] lg:w-[300px]" />
      <Image src={dexcreener} width={100} className="w-[100px] md:w-[150px] lg:w-[200px]" />
      <Image src={infinity} width={60} className="w-[50px] md:w-[75px] lg:w-[100px]" />
      <Image src={line} className="absolute bottom-[-10px]" />
    </motion.div>
  )
}

export default Partners