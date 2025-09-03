import React from 'react'

const JoinUs = () => {
    return (
        <div className="w-full py-10 mt-10">
        <div
            className={"bg-cover bg-center rounded-2xl w-full py-12 px-6 sm:px-12 text-white flex flex-col items-center justify-center text-center"}
            style={{ backgroundImage: "url('/landbg.jpg')" }}
        >
            {/* Title + Subtitle in two rows */}
            <div className="w-full max-w-xl flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Join Our Newsletter
            </h2>
            <p className="text-sm sm:text-base lg:text-lg">
                Get exclusive offers & updates directly in your inbox.
            </p>
            </div>

            {/* Form */}
            <div className="mt-6 flex flex-col items-center gap-4 w-full max-w-md">
            <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full px-4 py-2 rounded-xl text-white border-blue-500 border-1 focus:border-0
                focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 px-6 py-2 rounded-xl text-white font-semibold transition-colors"
            >
                Subscribe
            </button>
            </div>
        </div>
        </div>
    )
}

export default JoinUs
