import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieCard.css";

function MovieCard({ title, posterPath, movieId }) {
const imageUrl = getMovieImg(posterPath, 500);

return (
<li className="movie-card">
<Link to={`/movies/${movieId}`} className="link-no-underline">
<img src={imageUrl} alt={title} className="movie-img" />
<h2 className="movie-title">{title}</h2>
</Link>
</li>
);
}

export default MovieCard;