import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { MoviesProvider } from "./context/MoviesProvider";
import { AuthProvider } from "./context/AuthProvider";
import { initialUsers } from "./data/users";

function App() {
  useEffect(() => {
    const savedUsers = localStorage.getItem("streamtuc-users");

    const users = savedUsers
      ? JSON.parse(savedUsers)
      : [];

    const adminExists = users.some(
      (user: { email: string }) =>
        user.email === "admin@streamtuc.com",
    );

    if (!adminExists) {
      localStorage.setItem(
        "streamtuc-users",
        JSON.stringify([...users, ...initialUsers]),
      );
    }
  }, []);

  return (
    <AuthProvider>
      <MoviesProvider>
        <AppRouter />
      </MoviesProvider>
    </AuthProvider>
  );
}

export default App;