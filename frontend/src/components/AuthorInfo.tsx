type AuthorInfoSchema = {
    authorName : string
}
const AuthorInfo = ({authorName}:AuthorInfoSchema) =>{
    return (
        <div className="hidden lg:block px-5">
            <h3 className="text-xl font-bold my-3">Author</h3>
            <div className = 'ml-2'>
                <h2 className="text-lg font-semibold">{authorName}</h2>
                <p className="text-wrap text-gray-600">Master of mirth, purveyor of puns and the funniest person in the kingdom.</p>
            </div>
        </div>
    )
}
export default AuthorInfo;