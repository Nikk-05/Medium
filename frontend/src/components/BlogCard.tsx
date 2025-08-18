import Avatar from "./Avatar";
import { Link } from "react-router-dom";

type BlogCardProps = {
    id: string,
    authorId: string,
    authorName: string,
    publishedDate: string,
    title: string,
    content: string
}

const BlogCard = ({ id, authorName, publishedDate, title, content }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`} className="cursor-pointer">
            <div>
                <div className="flex flex-col m-2">
                    <div className="flex flex-row items-center">
                        <Avatar authorName={authorName} />
                        <div className="text-gray-500 text-lg font-semibold mr-4">
                            {authorName}
                        </div>
                        <div className="text-gray-500 text-sm font-medium">
                            {publishedDate}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mt-2">{title}</h2>
                        <p className="text-gray-700 mt-1 text-wrap">{content.slice(0, 100) + "......."}</p>
                        <span className="text-gray-700 text-sm mt-1 font-semibold">{`${Math.ceil(content.length / 50)} min read`}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;