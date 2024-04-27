import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ClassesPage from "./components/pages/ClassesPage";
import RacesPage from "./components/pages/RacesPage";
import MonstersPage from "./components/pages/MonstersPage";
import ClassDetailPage from "./components/pages/ClassDetailPage";
import RaceDetailPage from "./components/pages/RaceDetailPage";
import MonsterDetailPage from "./components/pages/MonstersDetailPage";
import Menu from "./components/common/Menu";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:className" element={<ClassDetailPage />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/races/:raceName" element={<RaceDetailPage />} />
          <Route path="/monsters" element={<MonstersPage />} />
          <Route path="/monster/:monsterName" element={<MonsterDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
