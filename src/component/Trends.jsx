import { useRef, useState, useEffect } from 'react';

const Trends = () => {
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);




    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        setShowLeft(el.scrollLeft > 0);
        setShowRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 5);
    };


    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        const scrollAmount = el.offsetWidth;

        el.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };


    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', handleScroll);
            handleScroll(); // initial check
        }
        return () => el?.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="px-30 pt-3 text-white relative bg-black overflow-x-hidden">
            <div className="pb-5 font-bold text-2xl">Trending Now</div>
            <div className="relative">
                {/* ScrollBar buttons */}
                {showLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#211b58]/60 hover:bg-[#211b58]/100 p-2 py-10 rounded-full text-5xl transition"
                    >
                        ‹
                    </button>
                )}


                {showRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#211b58]/60 hover:bg-[#211b58]/100 p-2 py-10 rounded-full text-5xl transition"
                    >
                        ›
                    </button>
                )}

                {/* ScrollBar */}

                <div ref={scrollRef} className=" px-5 flex gap-13 overflow-x-auto overflow-y-hidden hide-scrollbar scroll-smooth ">
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] min-h-[300px]" src="/trend1.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            1
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] min-h-[300px]" src="/trend2.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            2
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] min-h-[300px]" src="/trend 3.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            3
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] min-h-[300px]" src="/trend4.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            4
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] min-h-[300px]" src="/trend5.jpeg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            5
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl min-w-[200px] min-h-[300px]" src="/trend6.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            6
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] " src="/trend7.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            7
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] min-h-[300px]" src="/trend8.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            8
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] min-h-[300px]" src="/trend9.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            9
                        </div>
                    </div>
                    <div className="relative pt-5"><img className="rounded-2xl  min-w-[200px] min-h-[300px]" src="/trend10.jpg" height={180} />
                        <div className="font-bold text-9xl absolute bottom-0 text-stroke-white left-[-25px]">
                            10
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Trends
