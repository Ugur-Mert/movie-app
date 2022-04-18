import "./App.css";
import React from "react";

import Home from "./components/Home";
import MoviePage from "./components/MoviePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="moviepage" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
