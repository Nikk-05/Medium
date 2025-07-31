import { Navigate } from "react-router-dom";

type SubHeadingProps = {
    title: string,
    target: string
}

const SubHeading = (props: SubHeadingProps) =>{
    return (
        <div>
            <div>
                <p>{props.title}</p>
            </div>
        </div>
    )
}
export default SubHeading;