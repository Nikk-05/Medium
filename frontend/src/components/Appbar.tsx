import Avatar from "./Avatar"

const Appbar = ({authorName}:{authorName:string}) =>{
    return(
        <div className="w-screen bg-white p-3 mb-4 border-b h-max z-99 postion: sticky top-0">
            <nav className='flex flex-row justify-between items-center mx-auto'>
                <div className="px-2">
                    <p className='text-2xl font-bold font-serif'>Medium-Blog</p>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <div className="px-2">
                        <a href="/">Our Story</a>
                    </div>
                    <div className="px-2">
                        <a href="/">Write</a>
                    </div>
                    
                    <div className = "cursor-pointer">
                       <Avatar authorName={authorName} />
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Appbar;