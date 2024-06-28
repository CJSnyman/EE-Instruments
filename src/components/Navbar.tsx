"use client";

import exchanges from "@/utils/exchanges";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-around px-2">
            <Link
                href="/"
                className={`${
                    pathname === "/" ? "border-gray-500" : "hover:bg-gray-600 border-green-700"
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
                            : "hover:bg-gray-600 border-green-700"
                    } text-center w-[8ch] py-1 rounded-md border-2 `}
                >
                    {exchange}
                </Link>
            ))}
        </nav>
    );
}

export default Navbar;
