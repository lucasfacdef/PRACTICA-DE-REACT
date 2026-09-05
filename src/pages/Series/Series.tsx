import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";

function Series() {
  const { movies } = useMovies();

  const seriesList = movies.filter((movie) => movie.type === "series");

  return (
    <main className="movies-page">
      <h1>Series</h1>

      <div className="movies-grid">
        {seriesList.map((movie) => (
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

export default Series;