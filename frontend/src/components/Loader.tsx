import React from "react";

const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row gap-2 p-8">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-[wave_1.2s_ease-in-out_infinite] [animation-delay:0.0s]"></div>
                <div className="w-4 h-4 rounded-full bg-green-500 animate-[wave_1.2s_ease-in-out_infinite] [animation-delay:0.2s]"></div>
                <div className="w-4 h-4 rounded-full bg-green-500 animate-[wave_1.2s_ease-in-out_infinite] [animation-delay:0.4s]"></div>
                <div className="w-4 h-4 rounded-full bg-green-500 animate-[wave_1.2s_ease-in-out_infinite] [animation-delay:0.6s]"></div>
                <div className="w-4 h-4 rounded-full bg-green-500 animate-[wave_1.2s_ease-in-out_infinite] [animation-delay:0.8s]"></div>
            </div>
        </div>
    );
};

export default Loader;
