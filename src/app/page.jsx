"use client"
import Image from "next/image";
import './home.css'
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()
    const handleLearnMoreButton = () => {
        router.push("/pages/about");
    }

    const handleContactButton = () => {
        router.push("/pages/contact");
    }
    return <>
        <div className={'hero-section flex'}>
            <div className={'hero-left flex flex-col items-center w-1/2'}>
                <h1 className={'text-4xl pb-4'}>Explore the World with Us</h1>
                <h3 className={'text-xl pb-4'}>Your Adventure Awaits</h3>
                <p>Embark on your Sri Lankan journey with a view like no other. Our hero section captures the essence of
                    wanderlust with a breathtaking image of Sri Lanka’s iconic landscapes. "Discover Sri Lanka's Hidden
                    Gems" sets the tone for your adventure, while "Your Paradise Awaits" whispers the promise of
                    unforgettable experiences. Click "Get Started" and let your Sri Lankan adventure begin!
                </p>
                <div className={'flex flex-row items-center'}>
                    <button className={'hero-button'} onClick={handleLearnMoreButton}>Learn More</button>
                    <button className={'hero-button'} onClick={handleContactButton}>Contact</button>

                </div>
            </div>
            <div className={'hero-right flex items-center flex-col'}>
                <Image src={'/travalanime.gif'} alt={'Hero'} width={500} height={400} className={'block items-center'}/>
            </div>
        </div>
    </>

}
