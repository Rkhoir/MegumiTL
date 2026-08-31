import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Games", href: "/home", active: true },
    { name: "Android", href: "/android" },
    { name: "Windows", href: "/windows" },
    { name: "Advance Search", href: "/advanced" },
    { name: "Request Games", href: "/request" },
    { name: "Report Dead Link", href: "/report" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand (Hitam & Teks Pink) */}
          <a href="/home" className="flex items-center gap-3 shrink-0 group" aria-label="Android Archives home">
            <img 
              src="/logo.webp" 
              alt="Android Archives" 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            
          </a>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4" role="search">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type here..."
                aria-label="Search games"
                className="w-full bg-zinc-900 text-zinc-100 placeholder-zinc-500 text-sm rounded-full pl-4 pr-24 py-2 border border-zinc-800 focus:outline-none focus:border-pink-500 transition-all"
              />
              <button
                type="button"
                className="absolute right-1 top-1 bottom-1 px-4 bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold rounded-full transition-colors"
              >
                Search
              </button>
            </div>
          </div>

          {/* Navigasi Desktop (Teks Pink Active & Hover) */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-pink-500/15 text-pink-400 border border-pink-500/30"
                    : "text-zinc-300 hover:text-pink-400 hover:bg-zinc-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-pink-400 hover:bg-zinc-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Search Bar Mobile */}
        <div className="md:hidden pb-3 pt-1" role="search">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Type here..."
              aria-label="Search games"
              className="w-full bg-zinc-900 text-zinc-100 placeholder-zinc-500 text-sm rounded-lg pl-4 pr-20 py-2 border border-zinc-800 focus:outline-none focus:border-pink-500"
            />
            <button
              type="button"
              className="absolute right-1 top-1 bottom-1 px-3 bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Navigasi Mobile (Dropdown) */}
      {isOpen && (
        <nav className="lg:hidden bg-black border-b border-zinc-800 px-4 pt-2 pb-4 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.active
                  ? "bg-pink-500/15 text-pink-400 border-l-4 border-pink-500"
                  : "text-zinc-300 hover:text-pink-400 hover:bg-zinc-900"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}