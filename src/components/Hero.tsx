import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Removed ChevronDown import
import heroBg from '@/assets/hero-biryani.jpg';
import aboutKitchen from '@/assets/hero_biryani.jpg';
import franchiseBg from '@/assets/hero_bagara.jpg';

const heroImages = [heroBg, aboutKitchen, franchiseBg];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
        />
      </AnimatePresence>

      {/* Dark Overlay - Essential for text visibility */}
      <div className="absolute inset-0 bg-black/45" />
      
      {/* Gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Ornamental Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans font-bold drop-shadow-md">
              Authentic Hyderabadi Cuisine
            </span>
            <span className="h-px w-12 bg-primary" />
          </div>

          {/* Main Heading with Strong Glow */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Royal Flavors of{' '}
            <span className="text-primary drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
              Hyderabad
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
            Experience the legacy of centuries-old recipes, crafted with love and the finest spices
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold tracking-wide uppercase text-sm rounded-sm hover:bg-gold-dark transition-colors shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          >
            View Menu
          </motion.button>
        </motion.div>

        {/* Removed Scroll Indicator Arrow section here */}

      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 shadow-md ${
              currentImage === index ? 'bg-primary w-6 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;