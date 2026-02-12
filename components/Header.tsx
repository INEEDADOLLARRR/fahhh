import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Menu, X, PhoneCall } from 'lucide-react';
import { cn } from '../utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl py-4 border-b border-zinc-200/50 shadow-sm"
          : "bg-transparent py-8 border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6 shadow-lg shadow-primary/10">
            {/* Laptop Icon for Web Design Agency */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 16V5C20 4.46957 19.7893 3.96086 19.4142 3.58579C19.0391 3.21071 18.5304 3 18 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V16M2 20H22M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary">Roofers Scaling</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase leading-none mt-1">Sites</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollTo('services')} className="text-sm font-bold text-secondary hover:text-primary transition-colors tracking-tight">Services</button>
          <button onClick={() => scrollTo('process')} className="text-sm font-bold text-secondary hover:text-primary transition-colors tracking-tight">How It Works</button>
          <button onClick={() => scrollTo('results')} className="text-sm font-bold text-secondary hover:text-primary transition-colors tracking-tight">Results</button>
          <div className="h-4 w-[1px] bg-zinc-200"></div>
          <a href="tel:+15125550199" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
            <PhoneCall className="w-4 h-4" />
            <span className="font-bold text-sm">(512) 555-0199</span>
          </a>
          <Button onClick={() => scrollTo('contact')} className="px-6 py-2.5 text-sm shadow-xl shadow-accent/20">Book Strategy Call</Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 overflow-hidden md:hidden shadow-2xl"
          >
            <nav className="flex flex-col p-6 gap-6">
              <button onClick={() => scrollTo('services')} className="text-left text-lg font-bold text-primary">Services</button>
              <button onClick={() => scrollTo('process')} className="text-left text-lg font-bold text-primary">How It Works</button>
              <button onClick={() => scrollTo('results')} className="text-left text-lg font-bold text-primary">Results</button>
              <a href="tel:+15125550199" className="flex items-center gap-3 text-accent font-bold text-lg">
                <PhoneCall className="w-5 h-5" />
                (512) 555-0199
              </a>
              <Button onClick={() => scrollTo('contact')} fullWidth className="py-4 text-lg">Book Strategy Call</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};