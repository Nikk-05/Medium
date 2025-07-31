const ButtonComponent = ({ label, onClick, loader }: { label: string; onClick: () => void; loader: boolean }) => {
    return (
        <button
            className="bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-black transition-colors w-full mt-4"
            type="button"
            disabled={loader}
            onClick={onClick}
        >
            {loader ? (
                <span className="m-1 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-85" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                </span>
            ) : (
                <>
                    {label}
                </>
            )}

        </button>
    );
}
export default ButtonComponent;