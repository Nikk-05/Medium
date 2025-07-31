import Quote from "../components/Quote";
import Auth from "../components/Auth";

const Signup = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
            <div>
                <Auth type = {"signup"}/>
            </div>
            <div className="hidden md:block">
                <Quote />
            </div>
        </div>
    )
}

export default Signup;