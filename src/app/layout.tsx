import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "EE Instruments",
    description: "Website too view available items on EasyEquities",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1 className="text-4xl">EE Items</h1>
                    <Navbar />
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
