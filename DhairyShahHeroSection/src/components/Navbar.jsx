import React,{useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const [slider, setSlider] = useState(false)

    const toggleNavbar = () =>{
        setSlider(!slider)
    }

  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className='h-10 w-10 mr-2' src="./public/logo.png" alt="" />
                    <span className='text-xl '>VirtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Workflow</li>
                    <li>Pricing</li>
                    <li>Testimonial</li>
                </ul>
                <div className="hidden lg:flex justify-center items-center space-x-12">
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
                </div> 
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {slider ? <RxCross2 /> : <MdMenu />}
                    </button>
                </div>
            </div>
            {slider && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul className='py-4 flex flex-col gap-4'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Workflow</li>
                    <li>Pricing</li>
                    <li>Testimonial</li>
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
                    </div>
                </div>
            )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
