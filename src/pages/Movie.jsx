import React from "react";
import { useParams } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: 2,
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Comedy", "Family"],
  },
  {
    id: 3,
    title: "Jack Reacher: Never Go Back",
    time: 118,
    genres: ["Action", "Thriller"],
  },
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h1>Movie Not Found</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((g) => (
        <span key={g}>{g}</span>
      ))}
    </div>
  );
}

export default Movie;
