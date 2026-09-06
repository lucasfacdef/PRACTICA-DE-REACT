import { Button, Rate } from "antd";
import {
  ArrowLeftOutlined,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router";
import { useMovies } from "../../hooks/useMovies";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    movies,
    favorites,
    addFavorite,
    removeFavorite,
  } = useMovies();

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return (
      <main className="movie-detail">
        <h1>Película no encontrada</h1>

        <Button onClick={() => navigate(-1)}>
          Volver
        </Button>
      </main>
    );
  }

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
    <main className="movie-detail">
      <div className="movie-detail-image">
        <img src={movie.image} alt={movie.title} />
      </div>

      <div className="movie-detail-info">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        >
          Volver
        </Button>

        <h1>{movie.title}</h1>

        <div className="movie-detail-rating">
          <Rate
            disabled
            allowHalf
            value={movie.rating}
          />

          <span>{movie.rating} / 5</span>
        </div>

        <p className="movie-detail-description">
          {movie.description}
        </p>

        <div className="movie-detail-data">
          <p>
            <strong>Año:</strong> {movie.year}
          </p>

          <p>
            <strong>Categoría:</strong> {movie.category}
          </p>

          <p>
            <strong>Tipo:</strong>{" "}
            {movie.type === "movie"
              ? "Película"
              : "Serie"}
          </p>
        </div>

        <Button
          type="primary"
          size="large"
          icon={
            isFavorite ? (
              <HeartFilled />
            ) : (
              <HeartOutlined />
            )
          }
          onClick={handleFavorite}
        >
          {isFavorite
            ? "Quitar de favoritos"
            : "Agregar a favoritos"}
        </Button>
      </div>
    </main>
  );
}

export default MovieDetail;