import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function Card({ review }) {
    return (
        <div className="flex flex-col justify-center items-center text-center md:relative">
            <div>
                <img src={review.image} alt="" className="aspect-square w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] object-cover rounded-full z-10 absolute left-8 sm:-top-[4.8rem] sm:left-1" />
                <div className="absolute bg-violet-500 sm:w-[110px] w-[80px] h-[80px] sm:h-[110px] rounded-full hidden sm:block sm:-top-[4.9rem] sm:left-3"></div>
            </div>
            <div className="pt-9 pb-5">
                <h3 className="tracking-wider capitalize text-xl font-bold">{review.name}</h3>
                <p className="text-violet-400 text-sm">{review.job}</p>
            </div>

            <div className="text-center flex flex-col justify-center items-center space-y-4 mb-2">
                <FaQuoteLeft className="text-violet-400 text-sm" />
                <div className="text-slate-500">
                    {review.text}
                </div>
                <FaQuoteRight className="text-violet-400 text-sm" />
            </div>

        </div>
    );
}