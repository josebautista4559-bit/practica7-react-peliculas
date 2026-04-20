import "./App.css";
import AppRouter from "./routers/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1 className="title">🎬 Peliculas</h1>
        </header>

        <main>
          <AppRouter />
        </main>

        <footer className="main-footer">
          <p><strong>Integrantes:</strong></p>
          <p>Luis Alfonso Corona Becerra</p>
          <p>Jose Alberto Bautista Bautista</p>
          <p>Victor Abraham Arenas Rios</p>
          <p><strong>Profesor:</strong></p>
          <p>Zeus Emanuel Gutierrez Cobian</p>
          <hr />
          <p>Desarrollo Web 2026A | Abril 19</p>
          <p>CUCEI - Universidad de Guadalajara</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
