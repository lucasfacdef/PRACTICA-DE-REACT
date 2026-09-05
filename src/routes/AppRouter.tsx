import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "../components/Navbar/Navbar";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Admin from "../pages/Admin/Admin";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;