import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ClassesPage from "./components/pages/ClassesPage";
import RacesPage from "./components/pages/RacesPage";
import MonstersPage from "./components/pages/MonstersPage";
import ClassDetailPage from "./components/pages/ClassDetailPage";
import RaceDetailPage from "./components/pages/RaceDetailPage";
import MonsterDetailPage from "./components/pages/MonsterDetailPage";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "../src/components/styles/App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/classes/:className" element={<ClassDetailPage />} />
            <Route path="/races" element={<RacesPage />} />
            <Route path="/races/:raceName" element={<RaceDetailPage />} />
            <Route path="/monsters" element={<MonstersPage />} />
            <Route
              path="/monster/:monsterName"
              element={<MonsterDetailPage />}
            />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
