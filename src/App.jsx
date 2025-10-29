import LandingPage from "./pages/LandingPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css"; // ← VERY IMPORTANT!
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import './index.css';
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

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/news" element={<News />} />
          <Route path="/opinions" element={<Opinion />} />
          <Route path="/literary" element={<Literary />} />
          <Route path="/specials" element={<Special />} />
          <Route path="/arts" element={<Art />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/about" element={<About />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
