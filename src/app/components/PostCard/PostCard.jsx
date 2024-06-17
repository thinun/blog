'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './PostCard.css';
import { getPosts } from '@/db';

const PostCard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = () => {
            try {
                const postsData = getPosts();
                setPosts(postsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={'flex flex-row items-center justify-center flex-wrap'}>
            {posts.map((post) => (
                <div className={'post-card-container flex flex-row items-center justify-center'} key={post.id}>
                    <div className={'post-card-left w-3/4'}>
                        <Image src={post.img.src} alt={'Post Image'} className={'post-card-image'} width={300} height={300} />
                        <div className={'post-card-title'}>
                            {post.title}
                        </div>
                        <div className={'post-card-description'}>
                            {post.description}
                        </div>
                        <div className={'post-card-link'}>
                            <Link href={`/pages/blog/${post.slug}`} className={'post-card-link'}>Read More</Link>
                        </div>
                    </div>
                    <div className={'post-card-right flex flex-col items-center justify-between'}>
                        <div className={'post-card-date flex items-center align-middle'}>
                            {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostCard;
