import BlogCard from "../components/BlogCard";
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Skelton from "../components/Skelton";
import { BACKEND_URL } from "../config";
import axios from 'axios'
import { toast } from 'react-toastify'




type BlogSchema = {
    id: string;
    authorId: string,
    authorName: string;
    publishedDate: string;
    title: string;
    content: string;
};

const Myblogs = () => {
    const [myBlogs, setMyBlogs] = useState<BlogSchema[]>()
    const [loading, setLoading] = useState(false)
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate()
    const fetchBlogByUserId = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            setMyBlogs(response.data.data);

        } catch (error) {
            toast.error("Error fetching blog", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        finally {
            setLoading(false)
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            fetchBlogByUserId()
            toast.success("Post deleted successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        catch (error) {
            toast.error("!" + error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    useEffect(() => {
        // Scroll to top when component mounts or ID changes
        window.scrollTo(0, 0);
        fetchBlogByUserId();
    }, [id]);

    const handleEdit = (id: string, title: string, content: string) => {
        navigate(`/update-post/${id}`, { state: { id: id, title: title, content: content } })
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Appbar />
            <div className="w-full h-full flex flex-col items-center p-2">
                {loading ? (
                    <>
                        <Skelton />
                        <Skelton />
                        <Skelton />
                        <Skelton />
                        <Skelton />
                    </>
                ) : (
                    myBlogs?.map((blog, index) => (
                        <div
                            key={blog.id || index}
                            className="bg-white shadow-md rounded-lg p-2 mb-2 w-full md:w-1/2">
                            <div className="relative w-full max-w-3xl"> {/* Make the BlogCard wrapper relative */}

                                {/* Action buttons in top-right corner */}
                                <div className="absolute top-3 right-3 flex gap-2 z-10">
                                    <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="bg-white dark:bg-gray-800 text-gray-500 hover:text-red-500 p-2 rounded-full shadow transition"
                                    >
                                        {/* Trash icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                            className="w-5 h-5 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={() => handleEdit(blog.id, blog.title, blog.content)}
                                        className="bg-white dark:bg-gray-800 text-gray-500 hover:text-blue-500 p-2 rounded-full shadow transition"
                                    >
                                        {/* Pen icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                            className="w-5 h-5 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Blog Card */}
                                <BlogCard
                                    id={blog.id}
                                    authorId={blog.authorId}
                                    authorName={blog.authorName}
                                    publishedDate={blog.publishedDate}
                                    title={blog.title}
                                    content={blog.content}
                                />
                            </div>
                        </div>
                    ))
                )
                }
            </div>
        </div>
    )
};

export default Myblogs;
