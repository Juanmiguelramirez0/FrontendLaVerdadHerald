import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { AnimatePresence, motion } from "framer-motion";

// ===== USER PAGES =====
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import SearchPage from "./pages/SearchPage";
import Showarticles from "./pages/Showarticles.jsx";
import FullArticles from "./pages/Showarticles.jsx";
import AccountDeleted from "./pages/AccountDeleted";
import Opinion from "./nav-header/Opinion.jsx";
import Literary from "./nav-header/Literary.jsx";
import News from "./nav-header/News.jsx";
import ContactUs from "./nav-header/ContactUs.jsx";
import Special from "./nav-header/Specials.jsx";
import Art from "./nav-header/Art.jsx";
import Feature from "./nav-header/Feature.jsx";
import Sports from "./nav-header/Sports.jsx";
import About from "./nav-header/About.jsx";

// ===== ADMIN PAGES =====
// import AdminDashboard from "./admin/Statistics.jsx";
import CreateArticle from "./admin/CreateArticle.jsx";
import ManageModerators from "./admin/ManageModerators.jsx";
import DraftArticles from "./admin/DraftArticles.jsx";
import AuditTrail from "./admin/AuditTrail.jsx";
import Statistics from "./admin/Statistics.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx"; // 

// ===== COORDINATOR PAGES =====
import CoordinatorDashboard from "./coordinator/CoordinatorDashboard.jsx";
import ManageWriters from "./coordinator/ManageWriters.jsx";

// ===== ROUTES COMPONENT =====
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* ================= USER ROUTES ================= */}
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
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/specials" element={<Special />} />
        <Route path="/news" element={<News />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/art" element={<Art />} />
        <Route path="/literary" element={<Literary />} />
        <Route path="/article" element={<Showarticles />} />
        <Route path="/article/:id" element={<FullArticles />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/account-deleted" element={<AccountDeleted />} />
        <Route path="/opinion" element={<Opinion />} />

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-article" element={<CreateArticle />} />
        <Route path="/admin/draft-articles" element={<DraftArticles />} />
        <Route path="/admin/moderators" element={<ManageModerators />} />
        <Route path="/admin/audit-trail" element={<AuditTrail />} />
        <Route path="/admin/statistics" element={< Statistics />} />

        <Route path="/statistics" element={<Statistics />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/draft-articles" element={<DraftArticles />} />
        <Route path="/manage-moderators" element={<ManageModerators />} />
        <Route path="/audit-trail" element={<AuditTrail />} />

        {/* ================= COORDINATOR ROUTES ================= */}
        <Route path="/coordinator/dashboard" element={<CoordinatorDashboard />} />
        <Route path="/coordinator/manage-writers" element={<ManageWriters />} />

        {/* ================= SIDENAV ROUTES ================= */}

                <Route path="*" element={<AdminDashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

// ===== MAIN APP COMPONENT =====
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
