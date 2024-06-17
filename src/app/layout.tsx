import type { Metadata } from "next";
import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
