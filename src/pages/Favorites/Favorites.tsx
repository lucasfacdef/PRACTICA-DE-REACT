import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";

function Favorites() {
  const { favorites } = useMovies();

  return (
    <main className="movies-page">
      <h1>Mis favoritos</h1>

      {favorites.length === 0 ? (
        <p>No tenés películas favoritas todavía.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;