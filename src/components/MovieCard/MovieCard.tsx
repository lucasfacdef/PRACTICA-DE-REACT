import { Card, Rate } from "antd";
import { Link } from "react-router";

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
  return (
    <Card
      className="movie-card"
      cover={<img src={image} alt={title} />}
    >
      <h3>{title}</h3>

      <p>{year}</p>

      <Rate disabled allowHalf value={rating} />

      <Link to={`/movie/${id}`}>Ver detalles</Link>
    </Card>
  );
}

export default MovieCard;