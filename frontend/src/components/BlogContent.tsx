type BlogSchema = {
    id: string;
    title: string;
    content: string;
    publishedDate: string;
    authorName: string;
};

const BlogContent = (blog: BlogSchema) => {
    return (
        <div className="flex flex-col max-w-3xl px-12 bg-white">
            <div>
                <div className="text-4xl font-bold mt-2">{blog.title}</div>
                <div className='text-gray-400 mt-1 font-medium text-md'>
                    Posted on {
                        new Date(blog.publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    }
                </div>
            </div>
            <div className="text-justify mt-2" >
                {blog.content}
            </div>
        </div>
    )
}
export default BlogContent;