import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-16 py-4">
        <Link href="/" className="font-semibold text-black dark:text-zinc-50">
          Your Name
        </Link>
        <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/experience" className="hover:text-black dark:hover:text-zinc-50">
            Experience
          </Link>
          <Link href="/contact" className="hover:text-black dark:hover:text-zinc-50">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}