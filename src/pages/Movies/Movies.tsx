import { useState } from "react";
import { Select } from "antd";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useMovies } from "../../hooks/useMovies";

function Movies() {
  const { movies } = useMovies();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const movieList = movies.filter(
    (movie) =>
      movie.type === "movie" &&
      movie.title
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category === "Todas" ||
        movie.category === category),
  );

  return (
    <main className="movies-page">
      <h1>Películas</h1>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <Select
        value={category}
        onChange={setCategory}
        options={[
          {
            value: "Todas",
            label: "Todas las categorías",
          },
          {
            value: "Acción",
            label: "Acción",
          },
          {
            value: "Suspenso",
            label: "Suspenso",
          },
          {
            value: "Ciencia ficción",
            label: "Ciencia ficción",
          },
          {
            value: "Drama",
            label: "Drama",
          },
        ]}
      />

      <div className="movies-grid">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </main>
  );
}

export default Movies;