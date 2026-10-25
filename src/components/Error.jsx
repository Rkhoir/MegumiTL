export default function Error(){
    return (
        <div
            role="alert"
            className="rounded-[18px] border border-pink-400/20 bg-[#12141b] px-5 py-6 text-center shadow-[0_10px_28px_rgba(0,0,0,0.2)] sm:px-8"
        >
            <h2 className="m-0 text-xl font-extrabold tracking-[-0.03em] text-white sm:text-2xl">
                Games gagal dimuat!
            </h2>
            <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Silakan coba lagi nanti.
            </p>
        </div>
    )
}