import { Button, Menu } from "antd";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">STREAMTUC</Link>
      </div>

      <Menu
        mode="horizontal"
        className="navbar-menu"
        items={[
          {
            key: "home",
            label: <Link to="/">Inicio</Link>,
          },
          {
            key: "movies",
            label: <Link to="/movies">Películas</Link>,
          },
          {
            key: "series",
            label: <Link to="/series">Series</Link>,
          },
          {
            key: "favorites",
            label: <Link to="/favorites">Favoritos</Link>,
          },
        ]}
      />

      <div className="navbar-actions">
        <Button type="primary">
          <Link to="/login">Iniciar sesión</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;