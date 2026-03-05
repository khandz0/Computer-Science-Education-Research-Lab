import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PeoplePage from "./pages/PeoplePage";
import PublicationsPage from "./pages/PublicationsPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";

const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

const PageFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-sjsu-gold border-t-transparent" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
