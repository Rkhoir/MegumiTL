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
        <aside class="sidebar-panel sm:w-full">
            <h3>Categories</h3>
            <div class="category-list">
                {categories.map((category, index) => (
                    <div class="category-item w-full" key={category}>
                        <span>{category}</span>
                        <div
                            class="mini-thumb"
                            style={{ backgroundImage: `url('${miniThumbs[index]}')` }}
                        ></div>
                    </div>
                ))}
            </div>

            <div class="toast-box">
                <div class="toast-header">
                    <span>New Games Added!</span>
                    <button aria-label="Close">×</button>
                </div>
                <p>Please refresh the page now.</p>
                <button class="toast-button">Refresh Now</button>
            </div>
        </aside>
    );
}