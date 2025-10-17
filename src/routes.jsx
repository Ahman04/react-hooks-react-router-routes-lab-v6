// src/routes.jsx
import React from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="actors" element={<Actors />} />
    <Route path="directors" element={<Directors />} />
    <Route path="movie/:id" element={<Movie />} />
  </Route>
);

export default routes;
