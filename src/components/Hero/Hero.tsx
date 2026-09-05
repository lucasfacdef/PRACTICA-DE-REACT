import { Button } from "antd";
import { Link } from "react-router";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">STREAMTUC ORIGINAL</p>

        <h1>Las mejores películas y series</h1>

        <p>
          Disfrutá de tus películas y series favoritas en un solo lugar.
        </p>

        <Button type="primary" size="large">
          <Link to="/movies">Ver películas</Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;