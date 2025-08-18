import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks/useBlogs";
import Skelton from "../components/Skelton";

type Blog = {
    id: string;
    authorName: string;
    publishedDate: string;
    title: string;
    content: string;
    authorId: string;
};

const Blogs = () => {
    const { loading, blogs } = useBlogs() as { loading: boolean; blogs: Blog[] };
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
                    blogs?.map((blog, index) => (
                        <div key={blog.id} className="bg-white shadow-md rounded-lg p-2 mb-2 w-full md:w-1/2">
                            <BlogCard
                                key={blog.id || index}   // id best hai, fallback index
                                id={blog.id}
                                authorId={blog.authorId}
                                authorName={blog.authorName}
                                publishedDate={blog.publishedDate}
                                title={blog.title}
                                content={blog.content}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Blogs;