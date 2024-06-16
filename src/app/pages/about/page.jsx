import Image from "next/image";
import './about.css'

const about = () => {
    return (
        <div className={'about-container flex flex-row items-center justify-center mt-4'}>
            <div className={'about-content-left flex flex-col items-center justify-center w-1/2'}>
                <div className={'about-title'}>
                    <h3 className={'font-bold text-3xl my-4'}>About Us</h3>
                </div>
                <div className={'about-sub-title text-2xl my-4 text-center flex'}>
                    Welcome to my corner of the world! I am Emma, a passionate traveler and explorer dedicated to
                    uncovering the hidden treasures of Sri Lanka.
                </div>
                <div className={'about-description my-4 text-center flex'}>
                    My mission is to inspire and empower travelers to discover Sri Lanka responsibly and sustainably.
                    Through informative guides, practical advice, and personal anecdotes, I aim to showcase the beauty
                    of this island paradise while fostering cultural appreciation and environmental stewardship.
                </div>
            </div>
            <div className={'about-content-right flex flex-col items-center justify-center w-1/2'}>
                <div className={'about-image'}>
                    <Image src={'/about.png'} alt={'about image'} width={500} height={500} className={'block mt-10'}/>
                </div>
            </div>
        </div>
    );
};

export default about;
