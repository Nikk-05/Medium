const Avatar = ({authorName}: {authorName: string}) => {
    return (
        <div className='w-10 h-10 border rounded-full bg-red-200 flex items-center justify-center mr-4'>
            <p className="text-black font-semibold text-2xl">{authorName.charAt(0).toUpperCase()}</p>
        </div>
    );
}

export default Avatar;