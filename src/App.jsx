import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import { AnimatePresence, motion } from "framer-motion";

import LandingPage from "./pages/LandingPage";
import Login from './components/Login.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Dashboard from './Pages/Dashboard';
import Opinion from './nav-header/Opinion.jsx';
import Literary from './nav-header/Literary.jsx';
import News from './nav-header/News.jsx';
import Contact from './nav-header/Contact.jsx';
import Special from './nav-header/Specials.jsx';
import Art from './nav-header/Art.jsx';
import Feature from './nav-header/Feature.jsx';
import Sports from './nav-header/Sports.jsx';
import About from './nav-header/About.jsx';
import UserProfile from './pages/UserProfile.jsx';
import SearchPage from './pages/SearchPage';
import Showarticles from './pages/Showarticles.jsx';
import FullArticles from './pages/Showarticles.jsx';
import AccountDeleted from "./pages/AccountDeleted";




function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LandingPage />
            </motion.div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/specials" element={<Special />} />
        <Route path="/news" element={<News />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/art" element={<Art />} />
        <Route path="/literary" element={<Literary />} />
        <Route path="/article" element={<Showarticles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<FullArticles/>} />
        <Route path="/account-deleted" element={<AccountDeleted />} />
        <Route path="/opinion" element={<Opinion/>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
