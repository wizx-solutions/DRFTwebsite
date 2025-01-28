import React from 'react'

const CareerBlock = ({title}) => {
return (
    <div className='bg-brandBlack border border-orangeLight px-5 py-2 text-white inline-block rounded-xl mx-3 mb-5 hover:scale-105 cursor-default hover:shadow-md hover:shadow-orangeLight/30'>
        <div className='flex items-center justify-center'>
            <div className='bg-orangeLight w-2 h-2 mr-2'></div>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    </div>
)
}

export default CareerBlock
