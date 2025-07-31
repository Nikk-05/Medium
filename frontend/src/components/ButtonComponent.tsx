const ButtonComponent = ({ label, onClick }: { label: string; onClick: () => void }) => {
    return (
        <button
            className="bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-black transition-colors w-full mt-4"
            type="button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}
export default ButtonComponent;