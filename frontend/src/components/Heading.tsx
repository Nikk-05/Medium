type HeadingProps = {
    title: string
}
const Heading = (props: HeadingProps) =>{
    return (
        <div>
            <div>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}
export default Heading;