
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 mt-12">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo.webp" className="h-10" alt="MegumiTL Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-zinc-400 sm:mb-0">
            <li>
              <a href="#" className="hover:text-pink-500 hover:underline me-4 md:me-6 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 hover:underline me-4 md:me-6 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 hover:underline me-4 md:me-6 transition-colors">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 hover:underline transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <hr className="my-6 border-zinc-800 sm:mx-auto lg:my-8" />
        
        <span className="block text-sm text-zinc-500 sm:text-center">
          © {currentYear}{" "}
          <a href="/" className="hover:text-pink-500 hover:underline transition-colors">
            MegumiTL
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
