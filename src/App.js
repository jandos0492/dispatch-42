import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./components/Home";
import './App.css';
import EnglishInTruckingCourse from "./components/EnglishInTruckingCourse";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english-in-trucking/*" element={<EnglishInTruckingCourse />} />
      </Routes>
    </>
  )
}

export default App;