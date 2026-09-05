import MovieCard from "../MovieCard/MovieCard";

interface Movie {
  id: string;
  title: string;
  image: string;
  year: number;
  rating: number;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="movie-row">
      <h2>{title}</h2>

      <div className="movie-row-list">
        {movies.map((movie) => (
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
    </section>
  );
}

export default MovieRow;