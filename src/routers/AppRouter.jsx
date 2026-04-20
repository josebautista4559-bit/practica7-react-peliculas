import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/movies/:movieId" element={ <MovieDetails />} />
            </ Routes>
        </BrowserRouter>
    );
}

export default AppRouter;