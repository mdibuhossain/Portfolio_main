import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Navbar = React.lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
