import Link from "next/link";

export default async function headers() {
    return (
        <nav className="flex justify-between items-center border rounded
            rounded border-slate-300 px-4 py-2 my-4
        ">
            <h1 className="font-bold text-lg">
                <Link href="/">Z Movies</Link>
            </h1>
        </nav>
    );
}