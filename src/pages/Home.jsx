import React from "react";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Trolls" },
  { id: 3, title: "Jack Reacher: Never Go Back" },
];

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((m) => (
        <div key={m.id}>
          <h2>{m.title}</h2>
          <Link to={`/movie/${m.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
