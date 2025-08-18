import Appbar from "../components/Appbar";
import ButtonComponent from "../components/ButtonComponent";
import { useState } from 'react'
import { BACKEND_URL } from "../config";
import axios from "axios";
import { createBlogSchemaValidation } from "@nikk_05/medium-global";
import { toast } from 'react-toastify'
import { useNavigate, useLocation } from "react-router-dom";

const UpdatePost = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const validateSchema = createBlogSchemaValidation

    const [updateTitle, setUpdateTitle] = useState<string>(location.state.title);
    const [updateContent, setUpdateContent] = useState<string>(location.state.content);

    const updateHandler = async (): Promise<void> => {
        try {
            setLoading(true);
            console.log(updateContent)
            validateSchema.parse({ title: updateTitle, content: updateContent });
            await axios.put(`${BACKEND_URL}/api/v1/blog/${location.state.id}`,
                { title: updateTitle, content: updateContent },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }
            );
            toast.success("Post updated successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            navigate('/blogs', { state: { refresh: true } })
        }
        catch (error: unknown) {
            console.log(error);
            toast.error("Failed to publish blog. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen">
            <Appbar />
            <form className="flex flex-col p-3 justify-center items-center" onSubmit={e => e.preventDefault()}>
                <input
                    id="message"
                    className="block p-2.5 md:max-w-3xl w-full m-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title"
                    value={updateTitle}
                    onChange={e => setUpdateTitle(e.target.value)}
                />
                <textarea
                    id="editor"
                    rows={8}
                    className="block md:max-w-3xl w-full p-2 text-sm text-gray-800 bg-white border-1 border-gray-200 px-4 py-4 m-4 rounded-lg dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write an content..."
                    required
                    value={updateContent}
                    onChange={e => setUpdateContent(e.target.value)}
                />
                <div className="w-50">
                    <ButtonComponent label={"Update Post"} onClick={updateHandler} loader={loading} />
                </div>
            </form>
        </div>
    )
}
export default UpdatePost;