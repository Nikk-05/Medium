import { Link } from "react-router-dom";
import { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import axios from "axios"
const Auth = ({ type }: { type: "signup" | "login" }) => {
    const [postInputs, setPostInputs] = useState({
        email: "",
        fullname: "",
        password: ""
    });

    const sendRequest = async () => {
        const response = await axios.post(`https://medium-dev.nikhilworkprofile.workers.dev/api/v1/signup`, postInputs)
        console.log(response.data);
    }
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col items-center p-6 max-w-lg">
                <div className="text-3xl font-extrabold">
                    {type === "signup" ? "Create an account" : "Login to your account"}
                </div>
                <div className='text-slate-400 font-semibold mt-1'>
                    {type === "signup" ? "Already have an account?" : "Don't have an account?"}

                    {type === "signup" ? <Link className='underline pl-2' to={"/login"}>Login</Link> :
                        <Link className='underline pl-2' to={"/signup"}>Signup</Link>
                    }

                </div>

                <div className="flex flex-col items-center w-85">
                    <InputComponent label="Email or Username" type="email" placeholder="Enter your email"
                        onChange={(e) =>
                            setPostInputs({ ...postInputs, email: e.target.value })
                        } />
                    <InputComponent label="Name" type="text" placeholder="Enter your full name"
                        className={type === "signup" ? "" : "hidden"}
                        onChange={(e) =>
                            setPostInputs({ ...postInputs, fullname: e.target.value })
                        } />
                    <InputComponent label="Password" type="password" placeholder="Enter your password"
                        onChange={(e) =>
                            setPostInputs({ ...postInputs, password: e.target.value })
                        } />
                    <ButtonComponent label={type === "signup" ? "Sign Up" : "Log In"} onClick={sendRequest} />
                </div>
            </div>
        </div>


    )
}

export default Auth;