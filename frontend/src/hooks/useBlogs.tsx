import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilState } from "recoil";
import { allBlogsAtom } from "../atoms/allBlogsAtom";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify'

const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useRecoilState(allBlogsAtom);
    const location = useLocation();

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${BACKEND_URL}/api/v1/blogs`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            });
            setBlogs(response.data.data);
        }
        catch (error) {

            toast.error("Failed to fetch blogs. Please try again.", {
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
    };

    useEffect(() => {
        // Fetch blogs when component mounts or when navigating back from create page
        if (blogs.length === 0 || location.state?.refresh) {
            fetchBlogs();
        }
    }, [location.state])


    return {
        loading,
        blogs
    }
}


export { useBlogs };