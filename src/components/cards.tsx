import React from "react";


interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col justify-center w-60 h-[300px] border-2 rounded-2xl">
            <div>
                <h2 className="font-bold">{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <button className="px-5 py-2 rounded-xl bg-green-500">Yes</button>
                <button className="px-5 py-2 rounded-xl bg-red-500 ">No</button>
            </div>
        </div>
    );
};

export default Card;