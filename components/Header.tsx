import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">DriveEase</Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-sm hover:text-blue-500 transition-colors">Features</Link>
          <Link href="#packages" className="text-sm hover:text-blue-500 transition-colors">Packages</Link>
          <Link href="#contact" className="text-sm hover:text-blue-500 transition-colors">Contact</Link>
        </nav>
        <Link href="#get-started" className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
          Get Started
        </Link>
      </div>
    </header>
  )
}

