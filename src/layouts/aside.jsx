export default function Aside(props) {
    const miniThumbs = [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=500&q=80"
    ];

    const categories = [
        "3D",
        "Action",
        "Animated",
        "Extreme",
        "Puzzles",
        "Simulation",
        "Virtual Reality"
    ];

    return (
        <aside class="pt-[18px] sticky top-5 w-full min-w-0 max-w-[300px] justify-self-end max-[980px]:order-[-1] max-[980px]:static max-[980px]:max-w-none sm:w-full">
            <h3 class="mt-0 mb-[18px] text-[1.1rem] font-extrabold text-white/90 tracking-[0.14em] uppercase text-left">Categories</h3>
            <div class="flex flex-col gap-3 w-full">
                {categories.map((category, index) => (
                    <div class="flex items-center justify-between gap-3 min-h-[76px] w-full bg-white/[0.04] border border-white/[0.08] rounded-[14px] py-3 px-3.5 transition-[border-color,transform] duration-200 ease-in-out hover:border-[rgba(255,94,197,0.5)] hover:-translate-y-px" key={category}>
                        <span class="text-[1.05rem] font-bold text-[#f3f4f6] tracking-[-0.02em]">{category}</span>
                        <div
                            class="w-[74px] h-[52px] max-[640px]:w-[82px] rounded-xl bg-cover bg-center border border-white/[0.06] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                            style={{ backgroundImage: `url('${miniThumbs[index]}')` }}
                        ></div>
                    </div>
                ))}
            </div>

            <div class="mt-7 bg-[rgba(255,255,255,0.96)] rounded-2xl pt-3.5 px-3.5 pb-3 border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.16)] text-[#18181b]">
                <div class="flex items-center justify-between gap-3 font-extrabold text-[0.95rem] text-[#111827]">
                    <span>New Games Added!</span>
                    <button aria-label="Close" class="border-0 bg-transparent text-[1.1rem] text-[#374151] cursor-pointer">×</button>
                </div>
                <p class="mt-2.5 mb-4 text-[0.9rem] text-[#374151]">Please refresh the page now.</p>
                <button class="w-full border-0 rounded-[10px] bg-[linear-gradient(135deg,#ff59c7,#f25cff)] text-white font-extrabold cursor-pointer min-h-11 normal-case">Refresh Now</button>
            </div>
        </aside>
    );
}