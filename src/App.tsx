import AppRouter from "./routes/AppRouter";
import { MoviesProvider } from "./context/MoviesProvider";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <MoviesProvider>
        <AppRouter />
      </MoviesProvider>
    </AuthProvider>
  );
}

export default App;