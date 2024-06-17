import Image from "next/image";
import './post.css'


const singlePost = () => {
    return (
        <div className={'post-container flex flex-row items-start justify-center mt-10'}>
            <div className={'post-left flex flex-col items-center w-1/2'}>
                <Image src={'/f1.jpg'} alt={'Post image'} width={500} height={500} className={'rounded-xl'}></Image>
            </div>
            <div className={'post-right flex flex-col items-start w-1/2 gap-5'}>
                <div className={'post-title font-bold'}>
                    Title
                </div>
                <div className={'post-details flex flex-row items-center justify-start gap-6'}>
                    <div className={'post-author'}>
                        <Image src={'/f1.jpg'} alt={'post author'} width={50} height={50}
                               className={'author-image'}></Image>
                    </div>
                    <div className={'author'}>
                        <div className={'author-title text-xl'}>
                            Author
                        </div>
                        <div className={'author-name'}>
                            Thinun Tharushika
                        </div>
                    </div>
                    <div className={'post-date'}>
                        <div className={'date-title'}>
                            Published
                        </div>
                        <div className={'date'}>
                            20224/06/17
                        </div>
                    </div>
                </div>
                <div className={'post-description mt-4'}>
                    This creative "About Me" page data structure and description not only introduces Emma as a
                    knowledgeable and passionate guide to Sri Lanka but also establishes a personal connection with the
                    audience. It showcases her expertise, interests, and mission while providing clear contact options
                    for further engagement. This approach helps to build trust and credibility with readers seeking
                    authentic travel experiences in Sri Lanka.

                </div>
            </div>
        </div>
    );
};

export default singlePost;
