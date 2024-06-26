"use client";

import exchanges from "@/utils/exchanges";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-around px-2">
            <p>{JSON.stringify(pathname, null, 2)}</p>
            <Link
                href="/"
                className={`${
                    pathname === "/" ? "border-gray-500" : "hover:text-red-800 border-green-800"
                } text-center w-[8ch] py-1 rounded-md border-2 `}
            >
                Home
            </Link>
            {exchanges.map((exchange) => (
                <Link
                    key={exchange}
                    href={`/${exchange}`}
                    className={`${
                        pathname === `/${exchange}`
                            ? "border-gray-500"
                            : "hover:text-red-800 border-green-800"
                    } text-center w-[8ch] py-1 rounded-md border-2 `}
                >
                    {exchange}
                </Link>
            ))}
        </nav>
    );
}

export default Navbar;
