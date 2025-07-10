import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=" pt-10 px-30 overflow-x-hidden bg-black  text-white z-10" >
                <div className=" bg-cover absolute inset-0 bg-center opacity-30" style={{ backgroundImage: "url('/bg.png')" }}></div>
                <div className="relative z-0">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="py-0">
                            <img src="/logo3.png" width={180} />
                        </div>

                        <div className="flex">
                            <div className="border border-gray-500 rounded flex items-center mx-2 px-1">
                                <div >
                                    <img src="/lang.png" width={20} alt="Language" />
                                </div>
                                <select
                                    className="bg-transparent outline-none  px-3 p-1"
                                >
                                    <option className="text-black" value="English">English</option>
                                    <option className="text-black" value="Hindi">हिन्दी</option>
                                </select>
                            </div>

                            <button className="bg-red-600 px-4 py-1 rounded">
                                Sign in
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap items-center py-30">
                        <div className="text-6xl font-bold w-160 text-center">Unlimited movies, TV shows and more</div>

                        <div className="text-2xl font-bold py-10">Starts at ₹149. Cancel at any time.</div>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="py-3 " >
                            <input className="border  border-gray-500 rounded p-2  pr-60 mr-2 " type="text" placeholder='Email address'></input>
                            <button className="bg-red-600  p-2 px-5  rounded font-bold">Get Started </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>

    )
}

export default Navbar;
