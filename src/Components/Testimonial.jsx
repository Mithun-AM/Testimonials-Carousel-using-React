import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Testimonials({ reviews }) {

    const [index, setIndex] = useState(1);

    function leftShift(){
        if(index<=0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
    }

    function rightShift(){
        if(index === reviews.length-1){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    function supriseHandler(){
        let idx = Math.floor(Math.random()*reviews.length);
        setIndex(idx);
    }

    return (
        <div className="bg-gray-100 w-[90vw] md:w-[600px] py-5 px-10 rounded-md text-center flex flex-col justify-center items-center gap-3 transition-all duration-700 hover:shadow-xl">
            <Card review={reviews[index]} />
            <div className="flex flex-row text-2xl text-violet-400 space-x-3">
                <FiChevronLeft className='cursor-pointer hover:text-violet-500'  onClick={leftShift}/>
                <FiChevronRight className='cursor-pointer hover:text-violet-500' onClick={rightShift}/>
            </div>
            <button className="bg-violet-400 text-white px-6 py-[0.3rem] font-bold rounded-md hover:bg-violet-500 transition-all duration-200
        cursor-pointer" onClick={supriseHandler}>Suprise Me</button>
        </div>
    );
}

