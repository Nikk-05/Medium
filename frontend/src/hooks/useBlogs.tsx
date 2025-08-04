import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        (async () => {
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
                console.error("Error fetching blogs:", error);
            }
            finally {
                setLoading(false);
            }
        })();
    },[])

    return {
        loading,
        blogs
    }
}


export {useBlogs};