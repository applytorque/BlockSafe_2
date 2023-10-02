import React from 'react'
import BuildingImage from '../assets/buildingImage.jpeg'
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineSubdirectoryArrowLeft } from 'react-icons/md'
const RoadMap = () => {
    return (
        <div className=' mt-4 sm:grid sm:grid-cols-1  '>
            <img src={BuildingImage} alt="Building_image" className='-z-10 absolute w-full md:h-[160%] h-[180%]' />
            <div className='text-center mt-8'>
                <h1 className='text-5xl font-serif bg-blue-900 -mb-8 py-2 shadow-2xl'>Progressive Roadmap</h1>
            </div>
            {/* -------------------F I R S T    C A R D     L I N E -------------------*/}
            <div className=' text-black mb-10 md:mb-20 sm:pt-8 md:pt-32 grid grid-cols-1 md:flex p-8 md:p-6 gap-24 font-bold' >
                <div className="bg-white p-6 rounded-lg shadow-md -mb-32  md:mb-4">
                    <ul className="list-disc pl-6">
                        <li className='relative z-10'>Concept Evolution</li>
                        <li>Market Research</li>
                        <li>Strategic Planning</li>
                    </ul>
                    <p className='text-white bg-orange-500 text-center rounded-md ml-4 -mb-4 p-1 md:px-2 md:p-2  md:w-20 md:-mb-12 md:ml-10 md:mt-4'>2022</p>
                </div>
                {/* <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY2MC0xMTMucG5n.png?s=S07hK6VxAdy7xwP6t7mvU_6U7B9rpb0rJP6Kk1MNt38" alt="" /> */}

                <FaArrowRight className='md:text-white md:text-5xl md:mt-10  text-black text-xs' />

                <div className="bg-white p-6 rounded-lg shadow-md -mb-32 md:mb-4 ">
                    <p className='text-white bg-orange-500 rounded-md text-center p-1 -mt-2 md:px-2 md:p-2 md:w-24 md:ml-10 md:-mt-12'>2023-Q1</p>
                    <ul className="list-disc pl-6">
                        <li>Founder Stream</li>
                        <li>Business Plan</li>
                        <li>Team Development</li>
                    </ul>
                </div>
                <FaArrowRight className='md:text-white md:text-5xl md:mt-10  text-black text-xs' />

                <div className="bg-white p-6 rounded-lg shadow-md ">
                    <ul className="list-disc pl-6">
                        <li> Dubai Legal Incorporation</li>
                        <li> SRI Token</li>
                        <li>Smart Contract on Polygon</li>
                    </ul>
                    <p className='text-white bg-orange-500 rounded-md text-center p-1 ml-4 -mb-4  md:px-2 md:p-2 md:w-20 md:-mb-12 md:ml-44 md:-mr-6 md:mt-4'>2022-Q2</p>

                </div>
            </div>

            {/* -------------------2ND    C A R D     L I N  E-------------------*/}

            <div className='text-black mb-12 md:-mb-4  md:pt-12 grid sm:grid-cols-1 md:flex gap-28 md:p-32 p-8 font-bold'>
                <div className="bg-white p-6 rounded-lg shadow-md -mb-32 md:mb-4">
                    <ul className="list-disc pl-6 ">
                        <li> White Paper</li>
                        <li> Soft Launch</li>
                        <li>Node Private Sale
                            Start</li>
                        <li> Beta 1.0 Web and
                            App Start</li>
                        <li> Exchange Listing
                            SRI Trade</li>
                        <li > 1st Launching Event</li>
                    </ul>
                    <p className=' mt-2 text-white bg-orange-500 rounded-md text-center md:w-28  md:ml-32 p-2 md:-mb-12'>2023-Q3</p>
                </div>
                <FaArrowRight className='md:text-white md:text-5xl md:mt-12  text-black text-xs' />

                <div className="bg-white p-6 rounded-lg shadow-md -mb-8 md:mb-4">
                    <p className='text-white bg-orange-500 rounded-md p-2 text-center md:w-24  md:ml-32 md:-mt-12 md:-mr-10'>2022-Q4</p>
                    <ul className="list-disc pl-6">
                        <li> Trade Start with
                            Coinstore Exchange</li>
                        <li> SRI Swap Launching</li>
                        <li>SRI Pay Crypto Wallet
                            Will Launch</li>
                        <li> Beta 1.0 Web and
                            App Start</li>
                        <li> SRI Deals
                            2nd SRI Expo Event @
                            Dubai</li>
                        {/* <li> 1st Launching Event</li> */}
                    </ul>
                </div>
            </div>
            <MdOutlineSubdirectoryArrowLeft className=' md:text-white md:text-6xl md:ml-[67%] text-black text-xs md:font-extrabold' />
            {/* -------------------3RD   C A R D     L I N E -------------------*/}
            <div className='m-auto p-8 sm:-pt-20 justify-center text-black  font-bold md:mt-[-110px]'>
                <div className="bg-white p-6 rounded-lg shadow-md ">
                    <ul className="list-disc pl-6">
                        <li className=''>Listing in Top C-EX</li>
                        <li>Pairing Contracts</li>
                        <li> SRI SHOP</li>
                        <li>Launch SRI TRADEX</li>
                        <li> Launch SRI CHAIN</li>
                    </ul>
                    <p className='text-white bg-orange-500 rounded-md p-2 w-full text-center md:w-28 md:-mb-12 md:ml-10 md:mt-2'>2024-Q1 Q2</p>
                </div>
            </div>
            {/* ------------------------------------------ */}

        </div>
    )
}

export default RoadMap