import Image from "next/image";
import './home.css'
import Link from "next/link";

export default function Home() {
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
                    <Link href={'/pages/about'}>
                        <button className={'hero-button'}>Learn More</button>
                    </Link>

                    <Link href={'/pages/contact'}>
                        <button className={'hero-button'}>Contact</button>
                    </Link>

                </div>
            </div>
            <div className={'hero-right flex items-center flex-col'}>
                <Image src={'/hero.gif'} alt={'Hero'} width={500} height={400} className={'block items-center'}/>
            </div>
        </div>
    </>

}
