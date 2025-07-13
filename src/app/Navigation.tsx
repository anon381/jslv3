
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full mb-8 bg-white text-black shadow-md">
      <ul className="flex justify-center items-center gap-6 py-4 text-lg font-semibold">
        <li>
          <Link href="/" className="px-4 py-2 rounded transition-colors hover:bg-blue-100">Home</Link>
        </li>
        <li>
          <Link href="/about" className="px-4 py-2 rounded transition-colors hover:bg-green-100">About</Link>
        </li>
        <li>
          <Link href="/sermons" className="px-4 py-2 rounded transition-colors hover:bg-yellow-100">Sermons</Link>
        </li>
        <li>
          <Link href="/visit" className="px-4 py-2 rounded transition-colors hover:bg-purple-100">Visit</Link>
        </li>
        <li>
          <Link href="/contact" className="px-4 py-2 rounded transition-colors hover:bg-pink-100">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
