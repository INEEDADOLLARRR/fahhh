import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { ValueProp } from './components/ValueProp';
import { Process } from './components/Process';
import { Materials as Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Pages
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';

// Components
import { SEO } from './components/SEO';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <SEO />
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <ValueProp />
      <Process />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="antialiased text-primary selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* 404 Fallback could go here */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;