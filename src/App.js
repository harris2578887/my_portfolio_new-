import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Particle from "./components/Particle";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppShell({ load }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div
      className={`App${isHome ? " home-lock" : ""}`}
      id={load ? "no-scroll" : "scroll"}
    >
      <div className="bg-fx" aria-hidden="true">
        <span className="orb orb-left" />
        <span className="orb orb-right" />
      </div>
      <Particle />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <AppShell load={load} />
    </Router>
  );
}

export default App;
