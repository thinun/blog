import PostCard from "@/app/components/PostCard/PostCard";
import './blog.css'

export const metadata = {
    title: "Blogs",
    description: "Blogs Page",
};
const blog = () => {
    return (
        <div className={'post-card-grid flex flex-row items-center justify-center flex-wrap'}>
            <PostCard/>
        </div>
    );
};

export default blog;
