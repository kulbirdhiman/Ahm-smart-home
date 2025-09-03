'use client';
import React from 'react'
import Navbar from './Navbar'
import Panel from './AccessControlSection'

const Sec1 = () => {
    return (
        <div className="flex flex-col w-full  h-fit ">
        {/* Navbar */}
        <header className="w-full">
            <Navbar />
        </header>

        {/* Content Section */}
        <main className="flex-1 w-full h-fit">
            <Panel />
        </main>
        </div>
    )
}

export default Sec1
