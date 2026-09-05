import { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useMovies } from "../../hooks/useMovies";

function Movies() {
  const { movies } = useMovies();

  const [search, setSearch] = useState("");

  const movieList = movies.filter(
    (movie) =>
      movie.type === "movie" &&
      movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="movies-page">
      <h1>Películas</h1>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

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