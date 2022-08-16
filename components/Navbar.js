import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/logo.png"
function Navbar() {
  return (
    <>



      <header className=" sticky top-0 z-50 mx-10 bg-fuchsia-900 flex-none  flex justify-center items-center    ">
        <Link href="/">

          <Image className="flex-auto   my-10  mx-10 items-center justify-center w-1/5" src={logo} alt="Banner" width={100} height={100} />
        </Link>



        <nav className=" px-1 mx-1 py-1 my-1  container flex flex-row-reverse " >

          <Link href="#Hireme">
            <a className=" flex   my-5  mx-5 items-center hower:text-yellow-400 px-1 py-1 hower:text-yellow-500 text-2xl text-white text-bold" >Hire Me</a>
          </Link>
          <Link href="#Projects">
            <a className=" flex   my-5  mx-5 items-center hower:text-yellow-400 px-1 py-1 hower:text-yellow-500 text-2xl text-white hover: bg- to-blue-400 text-bold" >Projects</a>
          </Link>

          <Link href="#services">
            <a className=" flex   my-5  mx-5 items-center hower:text-yellow-400 px-1 py-1 hower:text-yellow-500 text-2xl text-white text-bold" >Services</a>
          </Link>

          <Link href="#about">
  
            <a className=" flex   my-5  mx-5 items-center hower:text-yellow-400 px-1 py-1 hower:text-yellow-500 text-2xl text-white text-bold hover:bg-fuchsia-600  hover:text-black " >About Us</a>
          </Link>



        </nav>




      </header>


    </>


  )
}

export default Navbar