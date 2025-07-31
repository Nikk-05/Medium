type InputComponentProps = {
    label: string,
    placeholder: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string
}

const InputComponent = (props: InputComponentProps) => {
    return (
        <div className={props.className || "flex flex-col w-full mt-2"}>
            <div className="text-md font-semibold mb-1">
                {props.label}
            </div>
            <div>
                <input className="border border-gray-300 rounded-md p-2 w-full font-medium"
                    type={props.type} placeholder={props.placeholder} onChange = {props.onChange} required />
            </div>
        </div>

    )
}

export default InputComponent;