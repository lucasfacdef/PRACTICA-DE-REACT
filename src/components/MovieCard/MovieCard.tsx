import { Button, Card, Rate } from "antd";
import { Link } from "react-router";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useMovies } from "../../hooks/useMovies";

interface MovieCardProps {
  id: string;
  title: string;
  image: string;
  year: number;
  rating: number;
}

function MovieCard({
  id,
  title,
  image,
  year,
  rating,
}: MovieCardProps) {
  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useMovies();

  const isFavorite = favorites.some(
    (favorite) => favorite.id === id,
  );

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        title,
        image,
        year,
        rating,
        description: "",
        category: "",
        type: "movie",
      });
    }
  };

  return (
    <Card
      className="movie-card"
      cover={<img src={image} alt={title} />}
    >
      <h3>{title}</h3>

      <p>{year}</p>

      <Rate
        disabled
        allowHalf
        value={rating}
      />

      <div>
        <Link to={`/movie/${id}`}>
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