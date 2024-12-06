import React from "react";


interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="px-5 mx-4 my-4 bg-violet-950 text-violet-300 ease-in-out transition duration-300 flex flex-col justify-between w-80 h-[18vh] border border-violet-950 rounded-2xl hover:shadow-xl hover:shadow-violet-400 hover:scale-105">
            <div className="mx-2 mt-2">
                <h2 className="font-bold ">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex justify-between px-5 py-2">
                <button className="px-5 py-2 rounded-xl bg-green-500 text-white hover:scale-105">Yes</button>
                <button className="px-5 py-2 rounded-xl bg-red-500 text-white hover:scale-105">No</button>
            </div>
        </div>
    );
};


export default Card;