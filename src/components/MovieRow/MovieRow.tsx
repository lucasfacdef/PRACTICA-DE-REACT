import MovieCard from "../MovieCard/MovieCard";
import type { Movie } from "../../types/Movie";

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

function MovieRow({
  title,
  movies,
}: MovieRowProps) {
  return (
    <section className="movie-row">
      <h2>{title}</h2>

      <div className="movie-row-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;