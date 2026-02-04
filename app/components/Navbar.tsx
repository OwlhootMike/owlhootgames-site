import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-md dark:border-zinc-800 dark:bg-black/75">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Logo / Name - Links back to Home */}
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80">
          Michael Figueroa
        </Link>

        {/* Navigation Links */}
        <div className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            Home
          </Link>
          <Link href="/games/nightclubs" className="text-sm font-medium text-zinc-600 hover:text-purple-500 dark:text-zinc-400 dark:hover:text-purple-400">
            Nightclubs: PRSM
          </Link>
          <Link href="/games/nova-galactica" className="text-sm font-medium text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400">
            Nova Galactica
          </Link>
          <Link href="/detective" className="text-sm font-medium text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-500">
            Detective Jane
          </Link>
          <Link href="/past" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            Past Work
          </Link>
          <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            About Me
          </Link>
        </div>

        {/* Mobile Menu Placeholder (Simplified for now) */}
        <div className="md:hidden">
          <span className="text-sm font-bold">Menu</span>
        </div>
      </div>
    </nav>
  );
}