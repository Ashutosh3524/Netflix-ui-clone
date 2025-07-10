

const Cards = () => {
    return (
        <div className="py-10 px-30 bg-black overflow-x-hidden text-white relative">
            <div className="font-bold text-2xl">More reasons to join</div>
            <div className="pt-10 flex flex-wrap gap-10">
                <div className="bg-gradient-to-b from-blue-950 to-gray-900 w-[290px] h-[290px] rounded-2xl relative">
                    <div className="font-bold text-2xl px-4 py-5">Enjoy on your TV</div>
                    <div className="px-4 text-gray-400 font-medium">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
                    <div><img className=" w15 h-15 absolute right-0 mr-10 mt-15 opacity-80 bottom-0 mb-5" src="./tv.png" ></img></div>
                </div>
                <div className="bg-gradient-to-b from-blue-950 to-gray-900 w-[290px] h-[290px] rounded-2xl relative">
                    <div className="font-bold text-2xl px-4 py-5">Download your shows to watch offline</div>
                    <div className="px-4 text-gray-400 font-medium">Save your favourites easily and always have something to watch.</div>
                    <div><img className=" w15 h-15 absolute right-0 mr-10 mt-15 opacity-80 bottom-0 mb-5" src="./download.png" ></img></div>
                </div>
                <div className="bg-gradient-to-b from-blue-950 to-gray-900 w-[290px] h-[290px] rounded-2xl relative">
                    <div className="font-bold text-2xl px-4 py-5">Watch everywhere</div>
                    <div className="px-4 text-gray-400 font-medium">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</div>
                    <div><img className=" w15 h-15 absolute right-0 mr-10 mt-15 opacity-80 bottom-0 mb-5" src="./telescope.png" ></img></div>
                </div>
                <div className="bg-gradient-to-b from-blue-950 to-gray-900 w-[290px] h-[290px] rounded-2xl relative">
                    <div className="font-bold text-2xl px-4 py-5">Create profiles for kids</div>
                    <div className="px-4 text-gray-400 font-medium">Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</div>
                    <div><img className=" w15 h-15 absolute right-0 mr-10 mt-15 bottom-0 mb-5 opacity-80" src="./children.png" ></img></div>
                </div>

            </div>
        </div>
    )
}

export default Cards
