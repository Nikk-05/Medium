import { useState } from "react"
import Avatar from "./Avatar"
import Drawer from "./Drawer";

const Appbar = ({ authorName }: { authorName: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-screen bg-white p-3 mb-4 border-b sticky top-0 z-50">
            <nav className="flex justify-between items-center mx-auto">
                {/* Logo */}
                <div className="px-2">
                    <p className="text-2xl font-bold font-serif">Medium-Blog</p>
                </div>

                <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <Avatar authorName={authorName} />
                </div>
                <Drawer isOpen = {isOpen} />
            </nav>
        </div>

    )
}
export default Appbar;