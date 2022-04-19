import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="movie" element={<MoviePage />}>
          <Route path=":movieId" element={<MoviePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
