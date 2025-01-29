import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link'

const PageEnd = () => {
    return (
        <div className="w-[70%] text-white text-center w-full md:w-3/4 pt-16 md:pt-36 mt-8 md:mt-16 mx-auto">
            <div className="text-2xl md:text-4xl">
                Your next great hire is just a conversation away. Reach out to us and watch your business <span
                className="text-customOrange">drift towards excellence!</span>
            </div>
            <Link href="/login">
                <Button
                    className="md:w-72 bg-[#111c2e] text-white text-xl md:text-2xl p-4 md:p-8 rounded-3xl border-3 border-[#6b4920] border-2 mt-10 md:mt-20">Contact
                    Us</Button>
            </Link>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-10 md:mt-20 mb-10 gap-4 md:gap-8">
                <Link href="mailto:sanjulap@drftglobal.com" className="flex gap-1.5"><img src={'/mail.png'} alt="logo"
                                                                                          className="h-6 w-6"/>sanjulap@drftglobal.com</Link>
                <span className="flex gap-1.5"><img src={'/telephone.png'} alt="logo" className="h-6 w-6"/>(+94) 88 871 8712</span>
                <Link href="https://www.instagram.com/" className="flex gap-1.5"><img src={'/instagram.png'} alt="logo"
                                                                                      className="h-6 w-6"/></Link>
                <Link href="https://www.linkedin.com/" className="flex gap-1.5"><img src={'/linkedin.png'} alt="logo"
                                                                                      className="h-6 w-6"/></Link>
            </div>
        </div>
    )
}

export default PageEnd
