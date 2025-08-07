import { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import axios from "axios";
import Heading from "./Heading";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { loginSchemaValidation, signUpSchemaValidation } from "@nikk_05/medium-global";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/userStateAtom";

const Auth = ({ type }: { type: "signup" | "login" }) => {
    const navigate = useNavigate();
    const validateSchema = type === "signup" ? signUpSchemaValidation : loginSchemaValidation;
    const [postInputs, setPostInputs] = useState({
        email: "",
        fullname: "",
        password: ""
    });
    const setUserName = useSetRecoilState(userState)

    const [loading, setLoading] = useState(false);

    const sendRequest = async () => {
        try {
            setLoading(true);
            validateSchema.parse(postInputs);
            const response = await axios.post(`${BACKEND_URL}/api/v1/${type === 'signup' ? 'signup' : 'login'}`, postInputs);
            const token = response.data.access_token;
            localStorage.setItem("access_token", token);
            setUserName(response.data.username) //Store name in global state
            navigate("/blogs")
        } catch (error) {
            console.error("Request failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col items-center p-6 max-w-lg">

                <Heading {...(type === 'signup' ? { title: "Create an account", subheading: "Already have an account?", target: "/login", label: "Login" } :
                    { title: "Login to your account", subheading: "Don't have an account?", target: "/signup", label: "Signup" })} />

                <div className="flex flex-col items-center w-85">
                    <InputComponent label="Email or Username" type="email" placeholder="Enter your email"
                        onChange={(e) => setPostInputs({ ...postInputs, email: e.target.value })} />

                    <InputComponent label="Name" type="text" placeholder="Enter your full name"
                        className={type === "signup" ? "" : "hidden"}
                        onChange={(e) => setPostInputs({ ...postInputs, fullname: e.target.value })} />

                    <InputComponent label="Password" type="password" placeholder="Enter your password"
                        onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })} />

                    <ButtonComponent
                        label={loading ? "Loading..." : type === "signup" ? "Sign Up" : "Log In"}
                        onClick={sendRequest}
                        loader={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default Auth;
