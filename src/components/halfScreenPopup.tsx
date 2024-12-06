import React from "react";


interface halfScreenPopupProps {
    betoption: string;
    betoption2: string;
}

const halfScreenPopupProps: React.FC<halfScreenPopupProps> = ({ betoption, betoption2 }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-violet-950 text-white w-1/2 h-1/2 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold">Bet on the winning team</h2>
                <p className="text-center">Predict the winner of the tournament</p>
                <div className="flex justify-between w-1/2">
                    <button className="px-5 py-2 rounded-xl bg-green-500 text-white hover:scale-105">{ betoption }</button>
                    
                    <button className="px-5 py-2 rounded-xl bg-red-500 text-white hover:scale-105">{ betoption2 }</button>
                </div>
            </div>
        </div>
    )
};

export default halfScreenPopupProps;