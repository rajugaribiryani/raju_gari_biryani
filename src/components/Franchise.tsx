import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import franchiseBg from '@/assets/franchise-bg.jpg';

const Franchise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="franchise"
      ref={ref}
      className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${franchiseBg})` }}
      />
      <div className="absolute inset-0 bg-dark/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto py-20"
      >
        {/* Decorative */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans">
            Partner With Us
          </span>
          <span className="h-px w-12 bg-primary/60" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark-foreground mb-6">
          Join the <span className="text-primary">Royal Family</span>
        </h2>

        <p className="text-dark-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Bring the authentic taste of Hyderabad to your city. Partner with Raju Gari Biryani 
          and become part of our growing legacy.
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-sans font-semibold tracking-wide uppercase text-sm rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Enquire Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Franchise;
