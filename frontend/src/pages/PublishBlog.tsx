import Appbar from "../components/Appbar";
import ButtonComponent from "../components/ButtonComponent";
import { useState } from 'react'
import { BACKEND_URL } from "../config";
import axios from "axios";
import { createBlogSchemaValidation } from "@nikk_05/medium-global";
import {ToastContainer, toast} from  'react-toastify'
import { useNavigate } from "react-router-dom";

const PublishBlog = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const validateSchema = createBlogSchemaValidation

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const createPost = async (): Promise<void> => {
        try {
            setLoading(true);
            validateSchema.parse({ title, content });
            await axios.post(`${BACKEND_URL}/api/v1/blog`, 
                { title, content},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }
            );
            toast("Blog published")
            navigate('/blogs')
        }
        catch(error: unknown){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }
    return (
        <div className = "min-h-screen">
            <Appbar/> 
            <ToastContainer/>
            <form className="flex flex-col p-3 justify-center items-center" onSubmit={e => e.preventDefault()}>
                <input
                    id="message"
                    className="block p-2.5 md:max-w-3xl w-full m-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    id="editor"
                    rows={8}
                    className="block md:max-w-3xl w-full p-2 text-sm text-gray-800 bg-white border-1 border-gray-200 px-4 py-4 m-4 rounded-lg dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write an content..."
                    required
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <div className="w-50">
                    <ButtonComponent label={"Publish Post"} onClick={createPost} loader={loading} />
                </div>
            </form>
        </div>
    )
}
export default PublishBlog;