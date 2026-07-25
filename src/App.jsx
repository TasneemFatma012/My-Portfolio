import { useState } from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SocialLinks from "./components/SocialLinks";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Modal from "./components/Modal";

import './App.css';
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/modal.css";
import "./styles/project.css";
import "./styles/certificate.css";
import "./styles/social.css";
import "./styles/footer.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <SocialLinks />
    <Projects />
    <Certificates />
    <Contact />
    <Footer />

    </>
  )
}

export default App
