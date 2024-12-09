import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='xl:bg-white'>

            {/* top */}
            <div className='flex xl:justify-between xl:flex-row flex-col mt-10 p-12'>

                {/* left */}
                <div className='flex flex-col gap-5 w-[292px]'>
                    <h1 className='text-2xl font-bold text-blueish'>MORENT</h1>
                    <p className='text-base font-medium'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>

                {/* right */}
                <div className='grid grid-cols-2 xl:grid-cols-3 gap-10 mt-10 xl:mt-0'>

                    {/* first div */}
                    <div>
                        <h1 className='text-xl font-bold'>About</h1>
                        <ul className='flex flex-col gap-5 text-base text-[#13131399]'>
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                            <li>Bussiness Relation</li>
                        </ul>
                    </div>

                    {/* second div */}

                    <div>
                        <h1 className='text-xl font-bold'>Community</h1>
                        <ul className='flex flex-col gap-5 text-base text-[#13131399]'>
                            <li>Events</li>
                            <li>Blog</li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                    </div>

                    {/* third div */}

                    <div>
                        <h1 className='text-xl font-bold'>Social</h1>
                        <ul className='flex flex-col gap-5 text-base text-[#13131399]'>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>


                </div>
            </div>

            {/* bottom */}
            <div className='flex xl:justify-between xl:p-12 p-10 border-t-4 text-xs flex-col-reverse gap-10'>
                <div>
                    <h1 className='xl:text-2xl font-semibold'>©2022 MORENT. All rights reserved</h1>
                </div>
                <div className='xl:text-2xl font-semibold flex gap-10'>
                    <h1>Privacy & Policy</h1>
                    <h1>Terms & Condition</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer