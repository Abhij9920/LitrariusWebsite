import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Australia from './pages/Australia';
import Coaching from './pages/Coaching';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/coaching"  element={<Coaching />} />
          <Route path="/about"     element={<About />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
