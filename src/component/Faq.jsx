import React, { useState } from "react"

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))

    }
    return (
        <div className="bg-black text-white px-30 overflow-x-hidden pb-5">
            <div className="font-bold text-2xl">Frequently Asked Questions</div>
            <div className="pt-10">
                <div onClick={() => handleToggle(0)} className="bg-gray-800 px-5 py-5 text-2xl mb-1 cursor-pointer flex justify-between items-center">
                    <div >What is Netflex?</div>
                    <div className="font-bold text-5xl transition-transform duration-500 ease-in-out">
                        <span className={`inline-block transform ${activeIndex === 0 ? "rotate-45" : "rotate-0"}`}>
                            +
                        </span>
                    </div>
                </div>
                <div className={`bg-gray-800  text-2xl mb-2 overflow-hidden px-5 ${activeIndex === 0 ? "py-5 max-h-[500px]" : "max-h-0"} duration-400`}>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                    <p className="pt-5">
                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p></div>

                <div onClick={() => handleToggle(1)} className="bg-gray-800 px-5 py-5 text-2xl mb-1 flex justify-between items-center">
                    <div className=" ">How much does Netflex cost??</div>
                    <div className="font-bold text-5xl transition-transform duration-500 ease-in-out">
                        <span className={`inline-block transform ${activeIndex === 1 ? "rotate-45" : "rotate-0"}`}>
                            +
                        </span>
                    </div>
                </div>
                <div className={`bg-gray-800  text-2xl mb-2 overflow-hidden px-5 ${activeIndex === 1 ? "py-5 max-h-[500px]" : "max-h-0"} duration-400`}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</div>

                <div onClick={() => handleToggle(2)} className="bg-gray-800 px-5 py-5 text-2xl mb-1 flex justify-between items-center">
                    <div className=" ">Where can I watch?</div>
                    <div className="font-bold text-5xl transition-transform duration-500 ease-in-out">
                        <span className={`inline-block transform ${activeIndex === 2 ? "rotate-45" : "rotate-0"}`}>
                            +
                        </span>
                    </div>
                </div>
                <div className={`bg-gray-800  text-2xl mb-2 overflow-hidden px-5 ${activeIndex === 2 ? "py-5 max-h-[500px]" : "max-h-0"} duration-400`}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                    <p className="pt-5">You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p></div>

                <div onClick={() => handleToggle(3)} className="bg-gray-800 px-5 py-5 text-2xl mb-1 flex justify-between items-center">
                    <div className=" ">How do I cancel?</div>
                    <div className="font-bold text-5xl transition-transform duration-500 ease-in-out">
                        <span className={`inline-block transform ${activeIndex === 3 ? "rotate-45" : "rotate-0"}`}>
                            +
                        </span>
                    </div>
                </div>
                <div className={`bg-gray-800  text-2xl mb-2 overflow-hidden px-5 ${activeIndex === 3 ? "py-5 max-h-[500px]" : "max-h-0"} duration-400`}>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>

                <div onClick={() => handleToggle(4)} className="bg-gray-800 px-5 py-5 text-2xl mb-1 flex justify-between items-center">
                    <div className=" ">What can I watch on Netflex?</div>
                    <div className="font-bold text-5xl transition-transform duration-500 ease-in-out">
                        <span className={`inline-block transform ${activeIndex === 4 ? "rotate-45" : "rotate-0"}`}>
                            +
                        </span>
                    </div>
                </div>
                <div className={`bg-gray-800  text-2xl mb-2 overflow-hidden px-5 ${activeIndex === 4 ? "py-5 max-h-[500px]" : "max-h-0"} duration-400`}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>

                <div onClick={() => handleToggle(5)} className="bg-gray-800 px-5 py-5 text-2xl mb-1 flex justify-between items-center">
                    <div className=" ">Is Netflex good for kids?</div>
                    <div className="font-bold text-5xl transition-transform duration-500 ease-in-out">
                        <span className={`inline-block transform ${activeIndex === 5 ? "rotate-45" : "rotate-0"}`}>
                            +
                        </span>
                    </div>
                </div>
                <div className={`bg-gray-800  text-2xl mb-2 overflow-hidden px-5 ${activeIndex === 5 ? "py-5 max-h-[500px]" : "max-h-0"} duration-400`}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                    <p className="pt-5">Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p></div>

            </div>

        </div>
    )
}

export default Faq
