import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='w-full p-5 bg-white border-b h-max z-99'>
            <nav className='flex flex-row justify-between items-center max-w-screen-xl mx-auto'>
                <div className="px-2">
                    <p className='text-4xl font-bold font-serif'>Medium-Blog</p>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <div className="px-2">
                        <a href="/">Our Story</a>
                    </div>
                    <div className="px-2">
                        <a href="/">Write</a>
                    </div>
                    <div className="bg-black font-semibold text-sm text-white px-5 py-2 rounded-full cursor-pointer">
                       <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
