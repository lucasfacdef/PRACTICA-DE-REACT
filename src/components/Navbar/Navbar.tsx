import { Button, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="navbar">
      {" "}
      <div className="navbar-logo">
        {" "}
        <Link to="/">STREAMTUC</Link>{" "}
      </div>{" "}
      <Menu
        mode="horizontal"
        className="navbar-menu"
        selectedKeys={[location.pathname]}
        items={[
          { key: "/", label: <Link to="/">Inicio</Link> },
          { key: "/movies", label: <Link to="/movies">Películas</Link> },
          { key: "/series", label: <Link to="/series">Series</Link> },
          { key: "/favorites", label: <Link to="/favorites">Favoritos</Link> },
          { key: "/about", label: <Link to="/about">Sobre nosotros</Link> },
        ]}
      />{" "}
      <div className="navbar-actions">
        {" "}
        {user ? (
          <>
            {" "}
            <span>Hola, {user.name}</span>{" "}
            {user.role === "admin" && (
              <Button onClick={() => navigate("/admin")}> Administrar </Button>
            )}{" "}
            <Button onClick={handleLogout}> Cerrar sesión </Button>{" "}
          </>
        ) : (
          <Button type="primary">
            {" "}
            <Link to="/login">Iniciar sesión</Link>{" "}
          </Button>
        )}{" "}
      </div>{" "}
    </nav>
  );
}
export default Navbar;
