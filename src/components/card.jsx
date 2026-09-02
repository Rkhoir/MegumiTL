export default function Card(props) {
    const { id, title, image, rating, genre} = props;

    const thumbnail = Array.isArray(image)
        ? image[0]?.img || "https://via.placeholder.com/150"
        : image || "https://via.placeholder.com/150";

    return (
        <a href={`/games/${id}`} class="bg-[rgba(17,17,20,0.9)] border block border-white/[0.08] rounded-[18px] overflow-hidden transition-[transform,border-color,box-shadow] duration-200 ease-in-out min-h-full shadow-[0_8px_22px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:border-[rgba(255,94,197,0.55)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.22)]">
            <div class="h-[220px] overflow-hidden bg-[#111827]">
                <img src={thumbnail} alt={title} loading="lazy" class="block w-full h-full object-cover" />
            </div>

            <div class="flex flex-wrap gap-1.5 px-[10px] pt-[10px]">
                {genre.map((g) => (
                    <span class="inline-flex items-center justify-center rounded-[5px] px-[7px] py-1 text-[0.56rem] font-bold tracking-[0.08em] uppercase text-[#d4d4d8] bg-white/[0.04] border border-white/[0.08]" key={`${title}-${g}`}>{g}</span>
                ))}
            </div>

            <h3 class="mx-3 mt-2 mb-[10px] text-[clamp(1.08rem,1.35vw,1.55rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-white">{title}</h3>
            <div class="mx-3 mt-0 mb-[14px] text-[0.56rem] font-bold tracking-[0.12em] text-white/[0.46] uppercase">AUGUST 18, 2026</div>
        </a>
    );
}