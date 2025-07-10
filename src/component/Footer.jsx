import React from 'react'

const Footer = () => {
    return (
        <div className="bg-black text-gray-400 font-semibold px-30 relative py-10 overflow-x-hidden">
            <div className="flex gap-1">
                <div>Questions? Call</div>
                <div className="underline">000-800-919-1743</div>
            </div>
            <div className="flex gap-40 underline">
                <div className="list-none w-[200px] py-10 space-y-2">
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>

                </div>
                <div className="list-none w-[200px] py-10 space-y-2">
                    <li>Help Centre</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>

                </div>
                <div className="list-none w-[200px] py-10 space-y-2">
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                </div>

                <div className="list-none w-[200px] py-10 space-y-2">
                    <li> Media Centre</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </div>
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
            </div>
            <div className="py-10">Netflix India</div>
            
                <div className="flex flex-wrap ">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className=" pl-1 underline text-blue-500 ">Learn more.</span> </div>
                
            
        </div>
    )
}

export default Footer
