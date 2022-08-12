import React from 'react'
import Image from 'next/image'
import banner from '../public/banner.jpg'


function Banner () {
    return (
    
       <div  className="items-center flex" >
             <Image className=" Banner" src={banner} alt="Banner" width={200} height={200} />
        </div>
    )
}

export default Banner