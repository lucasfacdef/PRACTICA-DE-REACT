import Hero from "../../components/Hero/Hero";
import MovieRow from "../../components/MovieRow/MovieRow";
import { useMovies } from "../../hooks/useMovies";

function Home() {
  const { movies } = useMovies();

  return (
    <>
      <Hero />

      <main className="home">
        <MovieRow
          title="Películas destacadas"
          movies={movies}
        />

        <MovieRow
          title="Lo más visto"
          movies={movies.slice(0, 3)}
        />
      </main>
    </>
  );
}

export default Home;