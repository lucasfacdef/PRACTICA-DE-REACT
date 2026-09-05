import { createContext } from "react";
import type { Movie } from "../types/Movie";

interface MoviesContextType {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  updateMovie: (movie: Movie) => void;
  deleteMovie: (id: string) => void;
}

export const MoviesContext = createContext<MoviesContextType | undefined>(
  undefined,
);