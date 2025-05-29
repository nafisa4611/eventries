import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";

const Navbar = () => {
    return (
        <nav>
            <div className="container mx-auto py-8 px-2 flex justify-between items-center">
                <div className="nav-brand">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Eventry"
                            width={135}
                            height={135} 
                            priority={false}/>
                    </Link>
                </div>

                <ul className="flex gap-4 text-[#9C9C9C]">
                    <li><SignInOut /></li>
                    <li className="">About</li>
                    <li className="">Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
