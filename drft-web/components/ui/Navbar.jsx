'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import {Button} from '@/components/ui/button'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const scrollToAbout = () => {
        window.scrollTo({
            top: window.innerHeight * 1,
            behavior: 'smooth'
        });
    }

    const handleScrollToSection = (event, id) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;
        const offset = 100; // Adjust this value to stop scrolling earlier
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
    };

    return (
        <nav className='z-50 fixed top-0 left-0 w-full backdrop-blur-sm'>
            <div className='max-w-full mx-auto px-6 sm:px-6 lg:px-16 lg:py-1 py-4 z-50'>
                <div className="py-5 lg:flex justify-between items-center hidden">
                    <a href="/">
                        <div className="flex flex-row items-center">
                            <img src={'/Logo.png'} alt="logo" width={120} height={25}/>
                        </div>
                    </a>

                    <div className="flex gap-10 items-center justify-center">
                        <a className='text-brandWhite text-md hover:text-orangeLight cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a>
                        <a className='text-brandWhite text-md hover:text-orangeLight cursor-pointer' onClick={(event)=> handleScrollToSection(event, 'aboutus')}>About Us</a>
                        <a className='text-brandWhite text-md hover:text-orangeLight cursor-pointer' onClick={(event)=> handleScrollToSection(event, 'positions')}>What We Do</a>
                        <Link href="/signup" className='text-brandWhite text-md hover:text-orangeLight' onClick={(event)=> handleScrollToSection(event, 'recruitment')}>Recruitement Procedure</Link>
                        <Link href="/login"><Button className='rounded-full w-40 bg-orangeLight font-semibold text-white hover:bg-brandWhite hover:text-orangeDark text-md'>Contact Us</Button></Link>
                    </div>
                </div>
                <div className="py-5 lg:hidden justify-between items-center flex">
                    <a href="/">
                        <div className="flex flex-row items-center">
                            <img src={'/Logo.png'} alt="logo" width={120} height={25}/>
                        </div>
                    </a>

                    <div className='z-50'><img src={isOpen ? '/xIcon.png' : '/MenuIcon.png'} alt="" onClick={toggleMenu}/></div>
                </div>

                <div className='bg-blueDark w-full h-lvh fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out flex items-center justify-center' style={{transform: isOpen ? 'translateX(0%)' : 'translateX(100%)'}}>
                    <div className="flex flex-col gap-10 items-center py-10  px-20 text-center">
                        <Link href="/signup" className='text-brandWhite text-2xl hover:text-orangeLight' >Home</Link>
                        <Link href="/signup" className='text-brandWhite text-2xl hover:text-orangeLight'>About Us</Link>
                        <Link href="/signup" className='text-brandWhite text-2xl hover:text-orangeLight'>What We Do</Link>
                        <Link href="/signup" className='text-brandWhite text-2xl hover:text-orangeLight'>Recruitement Procedure</Link>
                        <Link href="/login"><Button className='rounded-full w-11/12 px-12 py-6 bg-orangeLight font-semibold text-white hover:bg-brandWhite hover:text-orangeDark text-2xl'>Contact Us</Button></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
