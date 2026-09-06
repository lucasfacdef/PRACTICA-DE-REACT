import { Button, Card, Rate } from "antd";
import { Link } from "react-router";
import {
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { useMovies } from "../../hooks/useMovies";
import type { Movie } from "../../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useMovies();

  const isFavorite = favorites.some(
    (favorite) => favorite.id === movie.id,
  );

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Card
      className="movie-card"
      cover={
        <img
          src={movie.image}
          alt={movie.title}
        />
      }
    >
      <h3>{movie.title}</h3>

      <p>
        {movie.year} · {movie.category}
      </p>

      <Rate
        disabled
        allowHalf
        value={movie.rating}
      />

      <div>
        <Link to={`/movie/${movie.id}`}>
          Ver detalles
        </Link>
      </div>

      <Button
        type="text"
        onClick={handleFavorite}
        icon={
          isFavorite ? (
            <HeartFilled />
          ) : (
            <HeartOutlined />
          )
        }
      >
        {isFavorite
          ? "Quitar de favoritos"
          : "Agregar a favoritos"}
      </Button>
    </Card>
  );
}

export default MovieCard;