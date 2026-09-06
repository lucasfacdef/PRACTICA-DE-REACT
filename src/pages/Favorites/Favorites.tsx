import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";

function Favorites() {
  const { favorites } = useMovies();

  return (
    <main className="movies-page">
      <h1>Mis favoritos</h1>

      {favorites.length === 0 ? (
        <p>
          No tenés películas o series favoritas todavía.
        </p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;