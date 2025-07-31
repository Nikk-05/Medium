import Avatar from "./Avatar";


type BlogCardProps = {
    authorName: string,
    publishedDate: string,
    title: string,
    content: string
}
const BlogCard = ({ authorName, publishedDate, title, content }: BlogCardProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-2 mb-2 w-1/2">
            <div className="flex flex-col m-2">
                <div className="flex flex-row items-center">
                    <Avatar authorName={authorName} />
                    <div className="text-gray-500 text-2xl font-semibold mr-4">
                        {authorName}
                    </div>
                    <div className="text-gray-500 text-md font-medium">
                        {publishedDate}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mt-2">{title}</h2>
                    <p className="text-gray-700 mt-1">{content.slice(0, 100) + "......."}</p>
                    <span>{`${Math.ceil(content.length/50)} min read` }</span>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;