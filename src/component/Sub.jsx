import React from 'react'

const Sub = () => {
    return (
        <div className="bg-black text-white px-30 pt-10 relative flex flex-col items-center overflow-x-hidden">
            <div>
                Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className="py-3 flex items-center " >
                <input className="border  border-gray-500 rounded p-3  pr-60 mr-2 bg-gray-900" type="text" placeholder='Email address'></input>
                <button className="bg-red-600  p-2 px-5 text-2xl rounded font-bold">Get Started </button>
            </div>
        </div>
    )
}

export default Sub
