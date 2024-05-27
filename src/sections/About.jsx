import Image from "next/image"
import about from "../../public/assets/about.svg"


const About = () => {
  return (
    <div className="z-10 flex flex-col items-center border-[1px] border-[#0067FF] border-dashed mt-10 md:mt-20 lg:mt-32 rounded-3xl mx-5 lg:mx-10">
      <h4 className="text-[32px] md:text-[52px] font-medium xl:text-[68px]">About Us</h4>
      <p className="text-[12px] md:text-[16px] xl:text-[20px] font-medium text-center"><span className="text-[#0067FF]">Rocket Core</span> is an advanced trading and sniping bot designed to streamline token <br /> trading across  Core blockchain network</p>
      <Image src={about} />
    </div>
  )
}

export default About