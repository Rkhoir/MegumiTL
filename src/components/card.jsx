export default function Card(props) {
    const { id, title, image, rating, genre} = props;

    const thumbnail = Array.isArray(image)
        ? image[0]?.img || "https://via.placeholder.com/150"
        : image || "https://via.placeholder.com/150";

    return (
        <a href={`/games/${id}`} class="group relative block min-h-full overflow-hidden rounded-[18px] border border-white/[0.09] bg-[#12141b] shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-pink-400/60 hover:shadow-[0_18px_38px_rgba(0,0,0,0.35)]">
            <div class="relative aspect-[16/10] overflow-hidden bg-[#1b1d27]">
                <img src={thumbnail} alt={title} loading="lazy" class="block h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#12141b] via-transparent to-transparent opacity-70"></div>
                {rating && <span class="absolute right-3 top-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">★ {Number(rating).toFixed(1)}</span>}
            </div>

            <div class="flex flex-wrap gap-1.5 px-4 pt-4">
                {genre.map((g) => (
                    <span class="inline-flex items-center justify-center rounded-md border border-pink-300/15 bg-pink-300/[0.07] px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.08em] text-pink-100/80" key={`${title}-${g}`}>{g}</span>
                ))}
            </div>

            <div class="flex items-end justify-between gap-3 px-4 pb-4 pt-3">
                <h3 class="text-[clamp(1.08rem,1.35vw,1.55rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-white">{title}</h3>
                <span aria-hidden="true" class="shrink-0 text-lg text-pink-300 transition-transform group-hover:translate-x-1">→</span>
            </div>
        </a>
    );
}