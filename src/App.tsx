import AppRouter from "./routes/AppRouter";
import { MoviesProvider } from "./context/MoviesProvider";

function App() {
  return (
    <MoviesProvider>
      <AppRouter />
    </MoviesProvider>
  );
}

export default App;