import PostCard from "@/app/components/PostCard/PostCard";
import './blog.css'

const blog = () => {
    return (
        <div className={'post-card-grid flex flex-row items-center justify-center flex-wrap'}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    );
};

export default blog;
