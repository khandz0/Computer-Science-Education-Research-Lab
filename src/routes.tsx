import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PeoplePage from './pages/PeoplePage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import BilingualWorkshopPage from './pages/BilingualWorkshopPage';
import ProjectsPage from './pages/ProjectsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/people" element={<PeoplePage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/bilingual-workshop" element={<BilingualWorkshopPage />} />
      <Route path="/publications" element={<PublicationsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;