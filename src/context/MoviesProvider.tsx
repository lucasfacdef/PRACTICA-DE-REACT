import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Movie } from "../types/Movie";
import { movies as initialMovies } from "../data/movies";
import { MoviesContext } from "./MoviesContext";

interface MoviesProviderProps {
  children: ReactNode;
}

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const savedMovies = localStorage.getItem("streamtuc-movies");

    if (savedMovies) {
      return JSON.parse(savedMovies);
    }

    return initialMovies;
  });

  useEffect(() => {
    localStorage.setItem("streamtuc-movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie: Movie) => {
    setMovies((currentMovies) => [...currentMovies, movie]);
  };

  const updateMovie = (movie: Movie) => {
    setMovies((currentMovies) =>
      currentMovies.map((currentMovie) =>
        currentMovie.id === movie.id ? movie : currentMovie,
      ),
    );
  };

  const deleteMovie = (id: string) => {
    setMovies((currentMovies) =>
      currentMovies.filter((movie) => movie.id !== id),
    );
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        addMovie,
        updateMovie,
        deleteMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}