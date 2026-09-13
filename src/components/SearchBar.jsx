import { useState, useRef, useEffect } from "react";

export default function SearchBar({ variant = "desktop", className = "" }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    setOpen(true);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!value.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(value)}`);
        const data = await res.json();
        setResults(data.results ?? []);
      } catch (err) {
        console.error("Fetch search error:", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);
  }

  const isDesktop = variant === "desktop";

  return (
    <div ref={wrapperRef} className={`relative ${className}`} role="search">
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => query && setOpen(true)}
          placeholder="Type here..."
          aria-label="Search games"
          className={
            isDesktop
              ? "w-full rounded-full border border-white/10 bg-white/[0.06] py-2.5 pl-4 pr-24 text-sm text-zinc-100 placeholder-zinc-500 transition-all focus:border-pink-400 focus:outline-none"
              : "w-full bg-zinc-900 text-zinc-100 placeholder-zinc-500 text-sm rounded-lg pl-4 pr-20 py-2 border border-zinc-800 focus:outline-none focus:border-pink-500"
          }
        />
        <button
          type="button"
          className={
            isDesktop
              ? "absolute bottom-1 right-1 top-1 rounded-full bg-pink-500 px-4 text-xs font-semibold text-white transition-colors hover:bg-pink-400"
              : "absolute right-1 top-1 bottom-1 px-3 bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold rounded-md"
          }
        >
          Search
        </button>
      </div>

      {open && query && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-80 overflow-y-auto rounded-xl border border-white/10 bg-[#0d0e14] shadow-lg">
          {loading ? (
            <p className="px-4 py-3 text-sm text-zinc-400">Mencari...</p>
          ) : results.length > 0 ? (
            results.map((game) => (
              <a
                key={game.id}
                href={`/games/${game.slug ?? game.id}`}
                className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-100 hover:bg-white/[0.06]"
              >
                {game.thumbnail && (
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="h-8 w-8 rounded object-cover shrink-0"
                  />
                )}
                <span className="truncate">{game.title}</span>
              </a>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-zinc-400">Nggak ada hasil.</p>
          )}
        </div>
      )}
    </div>
  );
}