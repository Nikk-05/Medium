import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks/useBlogs";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";

type Blog = {
    id: string;
    authorName: string;
    publishedDate: string;
    title: string;
    content: string;
};

const Blogs = () => {
    const location = useLocation();
    const authorName = location.state;
    const { loading, blogs } = useBlogs() as { loading: boolean; blogs: Blog[] };
    return (
        <div className = "bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Appbar authorName = {authorName} />
            <div className="w-full h-full flex flex-col items-center p-2">
                {loading ? (
                    <>
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                    </>
                ) :
                    (blogs.map(blog => (<BlogCard 
                        id = {blog.id}
                        authorName={blog.authorName}
                        publishedDate={blog.publishedDate}
                        title={blog.title}
                        content={blog.content} />))
                    )}
            </div>
        </div>
    )
}

export default Blogs;