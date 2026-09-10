import Card from "../components/card";


export default function Main(props) {
    const { games = [] } = props;
    
    return (
        <div class="grid grid-cols-2 gap-x-4 gap-y-[18px] max-[640px]:grid-cols-1">
            {games.map((game, index) => {
                const thumbnail = game.thumbnail

                const title = game.title || "No Title";
                const genreText = game.genre || "Adventure";
                const genreList = String(genreText)
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
                    .slice(0, 4);

                return (
                    <Card 
                        id={game.id ?? index} 
                        title={title} 
                        thumbnail={thumbnail} 
                        genre={genreList} 
                    />
                );
            })}
        </div>
    );
}