
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-md text-[#222222] pt-2 border-b border-white/30">
      <ul className="flex justify-center items-center gap-6 py-4 text-lg font-semibold">
        <li>
          <Link href="/" className="px-4 py-2 rounded transition-colors hover:bg-[#1a1a40] hover:text-[#ffc857]">Home</Link>
        </li>
        <li>
          <Link href="/about" className="px-4 py-2 rounded transition-colors hover:bg-[#0b2545] hover:text-[#e1ad01]">About</Link>
        </li>
        <li>
          <Link href="/sermons" className="px-4 py-2 rounded transition-colors hover:bg-[#ffc857] hover:text-[#1a1a40]">Sermons</Link>
        </li>
        <li>
          <Link href="/visit" className="px-4 py-2 rounded transition-colors hover:bg-[#f0f0f0] hover:text-[#0b2545]">Visit</Link>
        </li>
        <li>
          <Link href="/contact" className="px-4 py-2 rounded transition-colors hover:bg-[#e1ad01] hover:text-[#222222]">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
