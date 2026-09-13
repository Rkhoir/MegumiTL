import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090a0f]/90 text-white shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <a href="/home" className="flex items-center gap-3 shrink-0 group" aria-label="Android Archives home">
            <img 
              src="/logo.webp" 
              alt="Android Archives" 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </a>

          {/* Search Bar (Desktop) */}
          <SearchBar variant="desktop" className="hidden md:flex flex-1 max-w-md mx-4" />

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  link.active
                    ? "border border-pink-400/25 bg-pink-400/10 text-pink-300"
                    : "text-zinc-300 hover:bg-white/[0.06] hover:text-pink-300"
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
        <SearchBar variant="mobile" className="md:hidden pb-3 pt-1" />
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