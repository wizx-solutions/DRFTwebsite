'use client'
import React from 'react'
import { Image } from 'next/image';
import { Button } from '@/components/ui/button';
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa6";


const Landing = () => {
return (
    <div><Dialog>
      <div className='relative h-[100vh] w-dvw overflow-hidden'>
        <div className="flex items-center justify-center h-screen absolute top-0 z-0">
          <div className="relative w-screen h-screen">
              <img src="/Hero.webp" alt="" className='absolute lg:top-12 -top-10  left-0 w-full h-full object-cover object-[55%] lg:object-center -z-50 pointer-events-none'/>
              <div className="absolute lg:-top-[200px] -top-[150px] lg:left-60 left-0 w-[1200px] h-[1200px] bg-blueDark rounded-full lg:blur-[1000px] blur-[400px] transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
              <div className="absolute -bottom-[400px] -right-[600px] w-[800px] h-[500px] lg:w-[500px] lg:h-[800px] bg-blueLight rounded-full lg:blur-[400px] blur-[250px] -z-10"></div>
              <div className="absolute w-full h-20 top-0 left-0 right-0 mx-auto bg-brandBlack blur-2xl -z-20"></div>
              <div className='absolute lg:top-1/2 top-1/3 transform -translate-y-1/2  lg:px-16 px-8 items-center justify-center flex flex-col lg:justify-start lg:items-start'>
                  <h1 className='text-white lg:text-6xl text-4xl text-center lg:text-left  uppercase leading-tight' style={{lineHeight:1.2,}}>Fueling <span className='font-bold text-orangeLight'>Talent</span> <br /> with <span className='font-bold text-orangeLight'>limitless reach</span></h1>

                  <DialogTrigger className="relative lg:w-5/12 w-3/4 py-3 bg-orangeLight rounded-full text-white font-bold text-xl justify-center items-center align-middle mt-5 hover:bg-blueLight cursor-pointer transition-all">
                    <div className="absolute inset-0 rounded-full border-2 border-transparent before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blueLight before:to-orangeLight before:z-[-1] before:m-[-2px]"></div>
                    <div className="relative z-20 flex flex-row items-center justify-center">
                      HIRE A TALENT <span className='ml-3'><FaArrowRightLong size={20}/></span>
                    </div>
                </DialogTrigger>
              </div>
      
          </div>
      </div>
      </div>
                          <DialogContent className='bg-white/90 w-5/6 lg:w-full'>
                              <DialogHeader>
                              <DialogTitle className="tracking-widest">CONTACT US</DialogTitle>
                                  <div className="w-full flex flex-col gap-3 items-center justify-center py-5">
                                      <Button className="bg-blueDark text-white text-lg rounded-lg w-full py-8 px-3 hover:bg-blueLight" onClick={() => window.location.href="mailto:careers@drftglobal.com"}><a href="tel:+94768071425" className='flex items-center justify-center gap-1.5 '> <FaEnvelope size={25}/>
                                                          careers@drftglobal.com</a></Button>
                                      <Button className="bg-orangeDark text-white text-lg rounded-lg w-full py-8 hover:bg-orangeLight" onClick={() => window.location.href="tel:+94768071425"}><a className='flex items-center justify-center gap-1.5'> <FaPhone size={20}/>  (+94) 76 807 1425</a></Button>
                                  </div>
                              </DialogHeader>
                          </DialogContent>
                          </Dialog>
    </div>
)
}

export default Landing
