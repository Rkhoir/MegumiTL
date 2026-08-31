export default function Card(props) {
    const { title, image, rating, genre } = props;

    const thumbnail = Array.isArray(image)
        ? image[0]?.img || "https://via.placeholder.com/150"
        : image || "https://via.placeholder.com/150";

    return (
        <article class="game-card">
            <div class="game-thumb">
                <img src={thumbnail} alt={title} loading="lazy" />
            </div>

            <div class="game-tags">
                {genre.map((g) => (
                    <span class="tag" key={`${title}-${g}`}>{g}</span>
                ))}
            </div>

            <h3>{title}</h3>
            <div class="game-date">AUGUST 18, 2026</div>
        </article>
    );
}
