import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { LuArrowDownUp } from "react-icons/lu";

  


const Pickup = () => {
  return (
    
        <div className='flex xl:justify-between xl:flex-row flex-col xl:gap-5 underline-none mx-10'>
            <div className="flex flex-col gap-5 xl:gap-3 bg-[#FFFFFF] xl:p-10 border rounded-xl p-5">
                <div className='flex xl:gap-3 gap-2 items-center'>
                    <FaRegCircleDot size={30} className='text-blueish'/>
                    <h1 className='text-base font-semibold'>Pick - Up</h1>
                </div>
                <div className='flex xl:gap-10 gap-3'>
                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Locations</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger><span className='hidden xl:block'>Select your city</span><span className='xl:hidden'>Semarang</span></AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <span className="border-l-2"></span>

                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Date</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger><span className='hidden xl:block'>Select your date</span><span className='xl:hidden'>20 July 2022</span></AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <span className="border-l-2"></span>

                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Time</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger><span className='hidden xl:block'>Select your time</span><span className='xl:hidden'>07.00</span></AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {/* mid area */}


            <div className='border rounded-xl bg-blueish w-[60px] h-[60px] xl:p-10 xl:mt-10 ml-32 xl:ml-0 shadow-blueish'>
                <LuArrowDownUp size={30} className='text-white flex flex-col items-center'/>
            </div>

            {/* last part */}


            <div className="flex flex-col xl:gap-3 gap-5 bg-[#FFFFFF] xl:p-10 p-5 border rounded-xl">
                <div className='flex gap-3 items-center'>
                    <FaRegCircleDot size={30} className='text-redish'/>
                    <h1 className='text-base font-semibold'>Drop=Off</h1>
                </div>
                <div className='flex xl:gap-10 gap-3'>
                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Locations</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger><span className='hidden xl:block'>Select your city</span><span className='xl:hidden'>Samarung</span></AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <span className="border-l-2"></span>

                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Date</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger><span className='hidden xl:block'>Select your date</span><span className='xl:hidden'>21 july 2022</span></AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <span className="border-l-2"></span>

                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Time</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger><span className='hidden xl:block'>Select your time</span><span className='xl:hidden'>01.00</span></AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Pickup