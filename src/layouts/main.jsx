import Card from "../components/card";


export default function Main(props) {
    const { games = [] } = props;
    
    return (
        <div class="game-grid">
            {games.map((game, index) => {
                const thumbnail = Array.isArray(game.image)
                    ? game.image[0]?.img || "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80"
                    : game.image || "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80";

                const title = game.name || "No Title";
                const genreText = game.genre || "Adventure";
                const genreList = String(genreText)
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
                    .slice(0, 4);

                return (
                    <Card 
                        key={game.id ?? index} 
                        title={title} 
                        image={thumbnail} 
                        rating={game.rating} 
                        genre={genreList} 
                    />
                );
            })}
        </div>
    );
}