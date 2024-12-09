import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image'
// import Pickup from './Pickup';
// import Popularcars from './Popularcars';


const Rentcar = () => {
  return (
    <div>
        <div className='grid lg:xl:grid-cols-2 lg:xl:gap-10 xl:mt-0 xl:p-10 p-10 -mt-36'>

            {/* image1 */}

            <div className='bg-hero2 bg-center bg-cover flex flex-col border rounded-xl xl:w-[640px] xl:h-[360px] h-[232] w-[327]'>
                <div className='flex flex-col xl:gap-5 gap-3 p-5 xl:p-0 text-white xl:w-[272px] xl:mt-10 xl:ml-5'>
                    <h1 className='xl:text-3xl text-base font-bold'>The Best Platform for Car Rental</h1>
                    <p className='xl:text-base text-xs font-medium'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                    <Button className='bg-blueish xl:w-[120px] w-[128px] xl:h-[44px]'>Rental Car</Button>
                </div>
                <div className='xl:ml-36 ml-16'>
                    <Image
                    src="/images/image 7.svg"
                    alt="car"
                    width={196}
                    height={56}
                    className='xl:w-[406px] xl:h-[116px]'/>
                </div>
            </div>

            {/* image2 */}

            <div className='bg-hero1 bg-center bg-cover border rounded-xl w-[640px] h-[360px] hidden xl:block'>
                <div className='flex flex-col gap-5 text-white w-[272px] mt-10 ml-5'>
                    <h1 className='text-3xl font-bold'>Easy way to rent a car at a low price</h1>
                    <p className='text-base font-medium'>Providing cheap car rental services and safe and comfortable facilities.</p>
                    <Button className='bg-secandory w-[120px] h-[44px]'>Rental Car</Button>
                </div>
                <div className='ml-36'>
                    <Image
                    src="/images/image 8.svg"
                    alt="car"
                    width={350}
                    height={108}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rentcar