import React from 'react'
import { Input } from "@/components/ui/input"
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Image from "next/image"


const Header = () => {
  return (
    <div>
        <div className='p-10 flex xl:justify-between xl:items-center xl:h-[38px] bg-white h-[288px]'>
            <div className='lg:flex gap-10'>
                <div className='text-2xl font-bold text-blueish'>MORENT</div>
                <div className='relative'>
                    <Input type="text" placeholder='Search something here' 
                    className='rounded-2xl xl:w-[492px] w-[263px] h-[48px] absolute text-center text-[#596780] border-[#596780] opacity-35 mt-10 xl:mt-0'/>
                    <div className='absolute xl:top-2 left-2 top-12'><IoSearch size={30} className='text-[#596780]'/></div>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='rounded-full w-[44px] h-[44px] border hover:bg-redish cursor-pointer hidden xl:block'>
                    <FaHeart size={25} className='ml-2 mt-3'/>
                </div>
                <div className='rounded-full w-[44px] h-[44px] border hover:bg-redish cursor-pointer hidden xl:block'>
                    <FaBell size={25} className='ml-2 mt-3'/>
                </div>
                <div className='rounded-full w-[44px] h-[44px] border hover:bg-redish cursor-pointer hidden xl:block'>
                    <IoMdSettings size={25} className='ml-2 mt-3'/>
                </div>
                <div className='rounded-full ml-40 xl:ml-0'>
                    <Image
                    src="/images/Image.svg"
                    alt="profile"
                    width={44}
                    height={44}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header