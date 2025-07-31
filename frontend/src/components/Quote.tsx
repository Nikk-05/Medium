const Quote = () =>{
    return(
        <div className = "bg-slate-100 h-screen flex justify-center items-center ">
            <div className="flex flex-col">
            <div className = 'max-w-xl text-3xl font-bold'>
                "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
            </div>
            <div className = 'mt-4 mb-4'>
                <div className = 'font-bold text-lg'>Jules Winnfield</div>
                <p className = 'text-gray-400 text-md font-medium '>CEO, Acme Inc</p>
            </div>
            </div>
        </div>
    )
}

export default Quote;