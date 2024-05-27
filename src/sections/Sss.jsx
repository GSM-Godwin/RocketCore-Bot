import Image from "next/image"
import left from "../../public/assets/left.svg"
import right from "../../public/assets/right.svg"

const Sss = () => {
  return (
    <div className="flex flex-col mx-5 lg:mx-10 items-center border-[1px] border-[#0067FF] border-dashed mt-16 lg:mt-32 rounded-3xl">
      <h4 className="text-[32px] text-center md:text-[52px] font-medium xl:text-[68px]">Swap & Snipe, Safely.</h4>
      <p className="text-[12px] md:text-[16px] xl:text-[20px] font-medium text-center"><span className="text-[#0067FF]">Rocket Core</span> is an advanced trading and sniping bot designed to streamline token <br /> trading across  Core blockchain network</p>
      <div className="flex flex-col lg:flex-row justify-evenly my-4">
        <Image src={left} className="lg:w-[47%] h-full" />
        <Image src={right} className="lg:w-[47%] h-full" />
      </div>
    </div>
  )
}

export default Sss