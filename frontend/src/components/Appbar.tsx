import { useState } from "react"
import Drawer from "./Drawer";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/userStateAtom";
import { Link } from 'react-router-dom'

const Appbar = () => {
    const userData = useRecoilValue(userState)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-screen bg-white p-3 mb-4 border-b sticky top-0 z-50">
            <nav className="flex justify-between items-center mx-auto">
                <div className="px-2 flex-6">
                    <Link to = "/blogs" className="text-2xl font-bold font-serif cursor-pointer outline-0">Medium-Blog</Link>
                </div>

                <div className = "flex flex-row justify-between flex-1">
                    <div className="bg-green-600 font-semibold text-sm text-white px-5 py-2 rounded-full cursor-pointer mx-5 hidden lg:block">
                        <Link className="text-nowrap" to="/create">New Post</Link>
                    </div>
                    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <div className='w-10 h-10 border rounded-full bg-red-200 flex items-center justify-center mr-4'>
                            <p className="text-black font-semibold text-2xl">{userData?.username.charAt(0).toUpperCase()}</p>
                        </div>
                    </div>
                </div>
                <Drawer isOpen={isOpen} />
            </nav>
        </div>

    )
}
export default Appbar;