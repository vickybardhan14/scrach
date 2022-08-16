import React from 'react'
import Image from 'next/image'
import banner from "../public/banner.svg"


function Content() {
    return (
        <>
            <div className=" mx-10 my-1 bg-orange-400 flex justify-center items-center ">

                <div className="  flex justify-center items-center ">

                    <h1 className="text-2xl text-center flex-auto px-5 py-5 mx-5 my-5 ">
                        Hello my name is Vicky Bardhan <br />
                        I design and develop things for WEB.
                    </h1>

                </div>
                <Image
                    src={banner}
                    alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
            </div>

            <section1 id="about">


                <div className=" selection:bg-fuchsia-300 selection:text-fuchsia-900 font-mono bg-yellow-100 flex flex-col justify-center items-center px-10 mx-10">
                    <h2 className="text-2xl text-bold py-20 ">
                        ABOUT ME
                    </h2>
                    <h3 className="py-10">
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </h3>
                </div>
                <div div className=" font-mono bg-yellow-100 flex justify-center px-10 mx-10">

                    <div className=" selection:bg-fuchsia-300 selection:text-fuchsia-900 flex flex-col basis-1/2 justify-center items-center">
                        <h2 className=" text-2xl text-bold py-10">
                            Get to know me!
                        </h2>
                        <p className="placeholder:italic">
                            I m a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br />I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.<br /> I m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don t hesitate to contact me.
                        </p>
                    </div>
                    <div className="flex flex-col basis-1/2  items-center">
                        <h2 className=" text-2xl text-bold py-10">
                            My Skills
                        </h2>
                        <div className=" grid grid-cols-4 gap-4">
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> HTML</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> React JS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify">Next JS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Gatsby JS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> CSS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Java ScriptS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Frontend development</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Backend development</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Database</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Website</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Web Applications</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> E-commerce websites</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Business websites</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> Responsive</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> IT technical Support</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-red-500 justify-center text-justify"> PC Laptop Support</div>
                        </div>
                    </div>
                </div>

            </section1>
            <section2 id="services" className='bg-slate-100 mx-10 '>


                <div className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">WHAT WE PROVIDE</h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">If you’re looking for the Professional digital team that can deliver Web development, SEO, graphic design, content and social media marketing, you’ve come to the right cave. We’re pioneers, makers, and designers who pride ourselves on also being pioneers. Get to know Vicky bardhan  and what we can do:</p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3 cursor-pointer ">Wwb Development</h2>
                                    <p className="leading-relaxed text-base">In this digital era Website is a symbol of brand authority, It assists with building a direct connection between business and clients. A business that has a website is very easily accessible. Vicky bardhan ’s Web development services are a one-stop solution for all your website needs. We have the perfect team which can meet your Website building requirement.</p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3 cursor-pointer">Creative Design</h2>
                                    <p className="leading-relaxed text-base">Vicky bardhan  is a full-service creative designs company. We design beautiful websites, compelling landing pages, interactive mobile apps, and seller banner ads.Vicky bardhan  is a top rated ecommerce web design, development and digital marketing company. We offer end-to-end ecommerce solutions to small, medium and large businesses to help them grow their customer base and online sales.</p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3 cursor-pointer">E-Commerce Solution</h2>
                                    <p className="leading-relaxed text-base">Vicky bardhan  is a top rated ecommerce web design, development and digital marketing company. We offer end-to-end ecommerce solutions to small, medium and large businesses to help them grow their customer base and online sales.</p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                    </div>
                </div>





            </section2>

        </>
    )
}

export default Content