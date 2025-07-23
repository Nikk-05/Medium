import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const IntroPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-row ml-6 h-90vh">
                <div className="flex flex-row justify-between items-center px-14 py-10">
                    <div className="flex flex-col pr-8">
                        <div className="text-[7rem] font-medium font-serif text-gray-900 leading-tight">
                            Human <br></br>stories & ideas
                        </div>
                        <p className="text-lg font-medium text-gray-700 mt-6 mb-8">
                            A place to read, write, and deepen your understanding.
                        </p>
                        <div>
                            <button className="bg-black text-white px-6 py-3 rounded-full cursor-pointer font-semibold text-lg">
                                Start Reading
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" pl-5 ml-20">
                    <img
                        src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
                        alt="Intro"
                        className="h-[550px] w-[500px] object-cover"
                    />
                </div>
            </div>
            <hr></hr>
            <Footer />


        </>
    );
};

export default IntroPage;