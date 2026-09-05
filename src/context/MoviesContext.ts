import { createContext } from "react";
import type { Movie } from "../types/Movie";

export interface MoviesContextType {
  movies: Movie[];

  addMovie: (movie: Movie) => void;
  updateMovie: (movie: Movie) => void;
  deleteMovie: (id: string) => void;

  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
}

export const MoviesContext = createContext<
  MoviesContextType | undefined
>(undefined);