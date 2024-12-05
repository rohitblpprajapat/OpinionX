import React from "react";


interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="px-5 ease-in-out transition duration-300 flex flex-col justify-between w-60 h-[300px] border-2 rounded-2xl hover:shadow-lg hover:scale-105">
            <div className="mx-2 mt-2">
                <h2 className="font-bold">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex justify-between px-5 py-2">
                <button className="px-5 py-2 rounded-xl bg-green-500 text-white">Yes</button>
                <button className="px-5 py-2 rounded-xl bg-red-500 text-white">No</button>
            </div>
        </div>
    );
};


export default Card;