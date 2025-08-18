import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const IntroPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row ml-0 lg:ml-6 min-h-[90vh]">
        
                <div className="flex flex-col justify-center items-start px-6 md:px-14 py-10 flex-1">
                    <div className="flex flex-col pr-0 lg:pr-8">
                        <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[7rem] font-medium font-serif text-gray-900 leading-tight">
                            Human <br />stories & ideas
                        </h1>
                        <p className="text-base sm:text-lg font-medium text-gray-700 mt-6 mb-8">
                            A place to read, write, and deepen your understanding.
                        </p>
                        <div>
                            <Link
                                className="bg-black text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full cursor-pointer font-semibold text-base sm:text-lg"
                                to="/login"
                            >
                                Start Reading
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-6 lg:mt-0 flex-1">
                    <img
                        src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
                        alt="Intro"
                        className="w-full max-w-[500px] h-auto object-cover px-4"
                    />
                </div>
            </div>
            <hr />
            <Footer />
        </>
    );
};

export default IntroPage;
