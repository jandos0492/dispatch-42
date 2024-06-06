import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./components/Home";
import './App.css';
import EnglishInTruckingCourse from "./components/EnglishInTruckingCourse";
import TruckDispatcherTheoryCourse from "./components/TruckDispatcherTheoryCourse";
import TruckDispatcherTrailerType from "./components/TruckDispatcherTrailerType";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english-in-trucking/*" element={<EnglishInTruckingCourse />} />
        <Route path="/truck-dispatcher-theory/*" element={<TruckDispatcherTheoryCourse />} />
        <Route path="/truck-dispatcher-trailer-type/*" element={<TruckDispatcherTrailerType />} />
      </Routes>
    </>
  )
}

export default App;