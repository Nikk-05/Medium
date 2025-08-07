import { useState } from "react"
import Drawer from "./Drawer";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/userStateAtom";

const Appbar = () => {
    const username = useRecoilValue(userState)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-screen bg-white p-3 mb-4 border-b sticky top-0 z-50">
            <nav className="flex justify-between items-center mx-auto">
                {/* Logo */}
                <div className="px-2">
                    <p className="text-2xl font-bold font-serif">Medium-Blog</p>
                </div>

                <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div className='w-10 h-10 border rounded-full bg-red-200 flex items-center justify-center mr-4'>
                        <p className="text-black font-semibold text-2xl">{username.charAt(0).toUpperCase()}</p>
                    </div>
                </div>
                <Drawer isOpen={isOpen} />
            </nav>
        </div>

    )
}
export default Appbar;