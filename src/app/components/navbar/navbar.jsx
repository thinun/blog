import Link from "next/link";
import Links from "@/app/components/navbar/links/links";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav className="navbar flex flex-row align-middle justify-between">
            <div>
                <Link href="/">
                    <Image className="block w-20 h-14" src="/logo/T_logo_s.png" alt="logo"  width={200} height={100}/>
                </Link>
            </div>
            <div>
                <Links/>
            </div>
        </nav>
    );
};

export default Navbar;
