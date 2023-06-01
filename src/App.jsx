import React from "react";
import Home from "./pages/Home";
import Create from "./components/CreateMovie"
import Movie from "./components/Movie"
import Movies from "./components/Movies";
import EditMovie from "./components/EditMovie"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

export default function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Movies" element={<Movies />} exact />
          <Route path="/Create" element={<Create />} exact />
          <Route path="/:id/edit" element={<EditMovie />} exact />
          <Route path="/:id/" element={<Movie />} exact />
          <Route path="/contact" element={<Contact />} exact />

        </Routes>
      </Router>
    </div>
  );
}


