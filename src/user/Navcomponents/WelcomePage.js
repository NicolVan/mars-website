import React from 'react';

function WelcomePage() {
    return (
        <>
            <div className="bg-black h-screen flex flex-col justify-center items-center">
                <div className="grid justify-items-center">
                    <img
                        className="object-center mt-10 custom-rounded shadow-lg shadow-orange-800/50 "
                        src="https://csunshinetoday.csun.edu/wp-content/uploads/Students-Study-Mars-Soil-for-Signs-of-Ancient-Life-in-ARCSNASA-Project.jpg"
                        alt="mars landscape"
                    />
                </div>
                <div className="bg-black justify-items-center mt-5 text-center">
                    <h1 className="mt-5 text-white text-7xl font-Nasaliza">
                        Mars<br />Exploration
                    </h1>
                    <p className="text-white text-center mt-5">
                        Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often called the Red Planet
                    </p>
                    <div className="bg-black flex justify-center items-center mt-5">
                        <div className="relative inline-flex group">
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-orange-400 via-amber-700 to-orange-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                            <button className="font-Nasaliza relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                Start Exploration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomePage;
