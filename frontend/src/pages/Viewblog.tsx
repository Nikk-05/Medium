import {useRecoilState} from 'recoil'
import { blogAtom } from '../atoms/blogAtom';
const Viewblog = () => {
    const [blog, setBlog] = useRecoilState(blogAtom);

    const fetchBlogById = async (id: string) =>{
        try{
            const response = await axios.
        }

    }
    return (
        <div>

          
        </div>
    )
}
export default Viewblog; 