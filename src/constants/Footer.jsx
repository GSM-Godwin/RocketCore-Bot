import Image from "next/image"
import top from "../../public/assets/top.svg"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-[#1E1E1E] lg:mx-[-40px] px-10 py-3">
        <div id="copyright" className="flex flex-[1] items-center text-12px lg:16px font-medium">
            <p className="text-[12px] lg:text-[16px]">© 2024 RockectCore.</p>
        </div>
        <div className="flex flex-col md:flex-row flex-[1] pt-3 lg:pt-0 items-center justify-between">
            <div id="link" className="flex flex-col md:flex-row gap-1 md:gap-5 lg:gap-10 items-center">
                <a href="" className="text-[12px] lg:text-[16px]">Ambassador Program</a>
                <a href="" className="text-[12px] lg:text-[16px]">Docs</a>
                <a href="" className="text-[12px] lg:text-[16px]">Join Telegram</a>
            </div>
            <Link href="/">
                <div id="back-to-top" className="items-center cursor-pointer pt-3 lg:pt-0">
                    <Image src={top} />
                </div>
            </Link>
        </div>
    </footer>
  )
}

export default Footer