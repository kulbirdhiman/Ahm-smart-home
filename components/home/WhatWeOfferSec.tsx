import React from 'react'
import ScrollBar from './ScrollableBar'

const ThirdSec = () => {
    return (
        <div className="flex flex-col px-4 sm:px-10 md:px-16 lg:px-20 py-10">
        <ScrollBar />

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-10 mt-10 text-xl sm:text-2xl w-full">
            <div className="flex flex-col items-center">
            <p>Design</p>
            <p className="font-semibold">1000+</p>
            </div>
            <div className="flex flex-col items-center">
            <p>Happy Customers</p>
            <p className="font-semibold">2000+</p>
            </div>
            <div className="flex flex-col items-center">
            <p>Years</p>
            <p className="font-semibold">10+</p>
            </div>
            <div className="flex flex-col items-center">
            <p>Technicians</p>
            <p className="font-semibold">250+</p>
            </div>
        </div>
        </div>
    )
}

export default ThirdSec
