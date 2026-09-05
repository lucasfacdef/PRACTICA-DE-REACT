import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export function useMovies() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error(
      "useMovies debe utilizarse dentro de MoviesProvider",
    );
  }

  return context;
}