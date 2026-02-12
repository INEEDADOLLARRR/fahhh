import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Summit Exteriors",
    location: "Denver, CO",
    quote: "Our lead volume tripled in the first 90 days. The best investment we've ever made.",
    image: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=1200",
    rating: 5
  },
  {
    name: "ProShield Roofing",
    location: "Austin, TX",
    quote: "We are finally ranking #1 for 'roofer near me' in our city. The ROI is undeniable.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
    rating: 5
  },
  {
    name: "Elite Roofing & Solar",
    location: "Orlando, FL",
    quote: "Roofers Scaling handles everything. I just answer the phone and book jobs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
    rating: 5
  },
  {
    name: "Titan Contractors",
    location: "Phoenix, AZ",
    quote: "The site looks professionally built, not like a cheap template. It elevates our brand.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1200",
    rating: 5
  }
];

export const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simple horizontal shift on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="py-32 bg-background overflow-hidden" id="proof">
      <div className="container mx-auto px-4 max-w-7xl mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
              Our Work. <br /> <span className="text-zinc-400">Your Vision.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="flex items-center gap-2 text-primary font-medium cursor-pointer group">
            View All Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Reveal>
      </div>

      {/* Horizontal Scroller */}
      <motion.div style={{ x }} className="flex gap-8 pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2))] w-max pb-12">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-[85vw] md:w-[600px] h-[500px] bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 group relative"
          >
            {/* Image takes up most of the card */}
            <div className="h-[70%] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="h-[30%] p-8 flex flex-col justify-center bg-white relative z-10">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-primary">{item.name}</h4>
                  <p className="text-sm text-zinc-400">{item.location}</p>
                </div>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
              <p className="text-secondary italic truncate">"{item.quote}"</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};