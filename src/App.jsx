import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectCaseStudy from "./pages/ProjectCaseStudy.jsx";
import { useScrollToTop } from "./hooks/useScrollToTop.js";

function ScrollManager() {
  useScrollToTop();
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}