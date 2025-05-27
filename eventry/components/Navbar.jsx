import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="mx-auto px-4 max-w-[1280px] flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Eventry"
                            width={135}
                            height={135} />
                    </Link>
                </div>

                <ul className="flex text-[#9C9C9C] list-none border-2">
                    <li className="border-2 mr-4">About</li>
                    <li className="border-2">Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
