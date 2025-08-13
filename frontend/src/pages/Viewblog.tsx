import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { blogAtom } from '../atoms/blogAtom';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useParams } from 'react-router-dom';
import BlogContent from '../components/BlogContent';
import AuthorInfo from '../components/AuthorInfo';
import Appbar from '../components/Appbar';
import Loader from '../components/Loader';

type BlogSchema = {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  authorName: string;
};

const Viewblog = () => {
  const [blog, setBlog] = useRecoilState<BlogSchema | undefined>(blogAtom);
  const { id } = useParams<{ id: string }>();

  const fetchBlogById = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      setBlog(response.data.blog);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts or ID changes
    window.scrollTo(0, 0);
    
    if (!blog || blog.id !== id) {
      fetchBlogById();
    }
  }, [id]);

  if (!id) return <div>Invalid Blog ID</div>;
  if (!blog) return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader />
    </div>
  )

  return (
    <div className="min-h-screen">
      <Appbar />
      <div className="flex justify-center">
        <div className="flex flex-row px-10 max-w-6xl py-8">
          <BlogContent {...blog} />
          <AuthorInfo {...blog} />
        </div>
      </div>
    </div>
  );
};

export default Viewblog;
