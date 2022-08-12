import React from 'react'
import Image from 'next/image'

import logo from "../public/logo.png"
function Navbar() {
  return (
    <>
      <div className=" bg-yellow-100 flex flex-auto items-center justify-center full">
        <nav  className="items-center flex" >
          <Image className="flex py-10 px-10 my-10 mx-10
          n" src={logo} alt="Banner" width={200} height={200} />
          <a className="border-solid border-2 border-indigo-600 flex py-1 px-1 my-20 mx-20 items-center  text-black "> My Vision </a>
          <a className="border-solid border-2 border-indigo-600 flex py-1 px-1 my-10 mx-10 items-center text-black "> Services </a>
          <a className="border-solid border-2 border-indigo-600 flex py-1 px-1 my-10 mx-10 items-center text-black "> Work </a>
          <a className="border-solid border-2 border-indigo-600 flex py-1 px-1 my-10 mx-10 items-center textt-black"> About Us</a>
        </nav>
      </div>
    </>


  )
}

export default Navbar