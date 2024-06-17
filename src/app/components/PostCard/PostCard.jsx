import React from 'react';
import Image from "next/image";
import Link from "next/link";
import './PostCard.css'
const PostCard = () => {
    return (
        <div className={'post-card-container flex flex-row items-center justify-center'}>
            <div className={'post-card-left w-3/4'}>
                <Image src={'/f1.jpg'} alt={'Post Image'} className={'post-card-image'} width={300} height={300}/>
                <div className={'post-card-title'}>
                    Title
                </div>
                <div className={'post-card-description'}>
                    Another Des
                </div>
                <div className={'post-card-link'}>
                    <Link href={'/pages/blog/1'} className={'post-card-link'}>Read More</Link>
                </div>
            </div>
            <div className={'post-card-right flex flex-col items-center justify-between'}>
                <div className={'post-card-date flex items-center align-middle'}>
                    2024/02/05
                </div>
            </div>

        </div>
    );
};

export default PostCard;
