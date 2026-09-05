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

  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const savedFavorites = localStorage.getItem("streamtuc-favorites");

    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("streamtuc-movies", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    localStorage.setItem(
      "streamtuc-favorites",
      JSON.stringify(favorites),
    );
  }, [favorites]);

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

  const addFavorite = (movie: Movie) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (favorite) => favorite.id === movie.id,
      );

      if (alreadyFavorite) {
        return currentFavorites;
      }

      return [...currentFavorites, movie];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((movie) => movie.id !== id),
    );
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        addMovie,
        updateMovie,
        deleteMovie,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}