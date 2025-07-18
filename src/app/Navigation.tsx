
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full mb-8 bg-white dark:bg-gray-900 shadow-md">
      <ul className="flex justify-center items-center gap-6 py-4 text-lg font-semibold">
        <li>
          <Link href="/" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/about" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</Link>
        </li>
        <li>
          <Link href="/sermons" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Sermons</Link>
        </li>
        <li>
          <Link href="/visit" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Visit</Link>
        </li>
        <li>
          <Link href="/contact" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
