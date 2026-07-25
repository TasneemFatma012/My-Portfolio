import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);