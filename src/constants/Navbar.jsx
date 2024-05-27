import Image from "next/image"
import logo from "../../public/assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="flex bg-[#141414] items-center py-4 lg:px-10 my-3 lg:m-5 shadow-md shadow-[#0066ff8f] rounded-full justify-between">
        <div id="logo" className="flex  px-5">
            <Image src={logo} />
        </div>
        <div id="nav-items" className="hidden md:flex  items-center justify-between">
            <div className="flex gap-5">
                <a href="/" className="font-medium text-[12px] xl:text-[16px]">Home</a>
                <a href="/" className="font-medium text-[12px] xl:text-[16px]">Reward</a>
                <a href="/" className="font-medium text-[12px] xl:text-[16px]">Join Telegram</a>
            </div>
            <div className="mx-5">
                <button className="bg-[#0067FF] rounded-full px-4 py-2 text-[12px] xl:text-[16px]">Telegram bot</button>
            </div>
        </div>
        <nav className='md:hidden'>
        <label id='hamburger-menu' className='mt-5 mr-5' >
          <input type="checkbox"/>
        </label>
        <aside id='sidebar' className='py-5 mt-3'>
          <div className='flex flex-col cursor-pointer text-[30px] items-center justify-center gap-5'>
            <div className="flex flex-col gap-5">
                <a href="/" className="font-medium text-[12px] xl:text-[16px]">Home</a>
                <a href="/" className="font-medium text-[12px] xl:text-[16px]">Reward</a>
                <a href="/" className="font-medium text-[12px] xl:text-[16px]">Join Telegram</a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <button className="bg-[#0067FF] rounded-full px-4 py-2 text-[12px] xl:text-[16px]">Telegram bot</button>
          </div>
        </aside>
      </nav>
    </nav>
  )
}

export default Navbar