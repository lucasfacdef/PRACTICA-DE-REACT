import { useParams } from "react-router";
import { useMovies } from "../../hooks/useMovies";

function MovieDetail() {
  const { id } = useParams();
  const { movies } = useMovies();

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <h1>Película no encontrada</h1>;
  }

  return (
    <main>
      <h1>{movie.title}</h1>

      <img src={movie.image} alt={movie.title} />

      <p>{movie.description}</p>

      <p>Año: {movie.year}</p>

      <p>Categoría: {movie.category}</p>

      <p>Calificación: {movie.rating}</p>
    </main>
  );
}

export default MovieDetail;