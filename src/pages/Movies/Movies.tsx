import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";

function Movies() {
  const { movies } = useMovies();

  const movieList = movies.filter((movie) => movie.type === "movie");

  return (
    <main className="movies-page">
      <h1>Películas</h1>

      <div className="movies-grid">
        {movieList.map((movie) => (
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
    </main>
  );
}

export default Movies;