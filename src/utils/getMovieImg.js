import placeholder from "../img/placeholder.png";

const VALID_SIZES = [92, 154, 185, 342, 500, 780, "original"];

export function getMovieImg(path, width = 500) {
  const size = VALID_SIZES.includes(width) ? width : 500;
  return path
    ? `https://image.tmdb.org/t/p/w${size}${path}`
    : placeholder;
}