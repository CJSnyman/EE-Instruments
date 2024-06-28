import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="bg-rose-800 py-4">
            <h1 className="text-5xl text-center font-serif">EE Items</h1>
            <hr className="py-1" />
            <Navbar />
        </header>
    );
}
