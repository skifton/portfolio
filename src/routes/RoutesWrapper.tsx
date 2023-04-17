import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ERootWrapper from "../components/ERootWrapper";
import Main from '../views/MainPage/Main';
import About from "../views/AboutPage/About";
import Projects from "../views/ProjectsPage/Projects";
import Contact from "../views/ContactPage/Contact";

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="main" />} />
      <Route path="/" element={<ERootWrapper />}>
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;