import GroupItems from "@/components/GroupItems";

export default async function Home() {
    return (
        <main>
            <h1 className="text-4xl">EE Items</h1>
            <GroupItems region="all" />
        </main>
    );
}
