import { Link } from "react-router-dom";

type HeadingProps = {
    title: string,
    subheading: string,
    target: string,
    label: string
}
const Heading = ({ title, subheading, target, label }: HeadingProps) => {
    return (
        <div>
            <div className="text-3xl font-extrabold">
                {title}
            </div>
            <div className='text-slate-400 font-semibold mt-1'>
                {subheading}
                <Link className='underline pl-2' to={target}>{label}</Link>
            </div>
        </div>
    )
}
export default Heading;