import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks/useBlogs";
const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return (
            <div role="status" className="animate-pulse">
                 <div className="flex items-center justify-center mt-4">
                    <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                    <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
               
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    return (
        <>
            <Appbar authorName={"Nikhil Singh"} />
            <div className="w-screen h-screen flex flex-col items-center p-2">
                <BlogCard authorName={"Nikhil Singh"}
                    publishedDate={"Jan 1, 2023"}
                    title={"Understanding React Hooks"}
                    content={"React Hooks are functions that let you use state and other React features without writing a class. They allow you to use state and lifecycle methods in functional components, making your code cleaner and more reusable."}
                />
                <BlogCard authorName={"John Doe"}
                    publishedDate={"Feb 15, 2023"}
                    title={"A Guide to JavaScript Promises"}
                    content={"Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. Promises allow you to write cleaner asynchronous code by avoiding callback hell."}
                    
                />
                <BlogCard authorName={"Jane Smith"}
                    publishedDate={"Mar 10, 2023"}
                    title={"CSS Grid vs Flexbox: Which to Use?"}
                    content={"My best backend work so far is Simplink, where I implemented a serverless architecture using Cloudflare Workers to deliver a highly scalable and low-latency URL shortening service. Instead of relying on traditional servers, I used Cloudflare’s edge network to handle requests closer to users, significantly improving performance. The backend integrates with a database through a proxy-enabled Prisma + Neon setup, ensuring secure and efficient data access. I also implemented JWT authentication, middleware for request validation, and proper error handling. This project not only enhanced my backend skills but also deepened my understanding of serverless deployments, edge computing, and building globally distributed APIs. It’s a testament to my ability to create robust, scalable backend solutions that meet real-world needs."}
                    />
                <BlogCard authorName={"Alice Johnson"}
                    publishedDate={"Apr 20, 2023"}
                    title={"Exploring the New Features in ES2023"}
                    content={"ES2023 introduces several exciting features that enhance the JavaScript language. These include new methods for arrays and objects, improved error handling, and more powerful async functions. These features make JavaScript more efficient and easier to work with, allowing developers to write cleaner and more maintainable code."}
                    
                />
            </div>
        </>
    )
}

export default Blogs;