import { Link } from "react-router-dom";
import { userState } from "../atoms/userStateAtom";
import { useRecoilValue } from "recoil";

type DrawerProps = {
    isOpen: boolean;
}
const Drawer = ({ isOpen }: DrawerProps) => {
    const userData = useRecoilValue(userState)
    
    return (
        <div>
            <div
                className={`fixed top-16 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-gray-100 w-64 dark:bg-gray-800 
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >

                <div className="py-4 flex flex-col ">
                    <Link to={`/userblogs/${userData?.id}`} className="flex items-center p-2 mb-2 border-b-1 border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                        My Posts
                    </Link>
                    <Link to="/create" className="flex items-center p-2 mb-2 border-b-1 border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Write
                    </Link>
                    <Link to="/logout" className="flex items-center p-2  mb-2 border-b-1 border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Logout
                    </Link>
                </div >
            </div >
        </div>
    );
};

export default Drawer;
