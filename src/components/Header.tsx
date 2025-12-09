import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.jpg';
// 1. IMPORT THE BUTTON HERE
import GoogleReviewBtn from './ui/GoogleReviewBtn'; 

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
  { name: 'Franchise', href: '#franchise' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500); 
  };

  const headerBgClass = scrolled || mobileMenuOpen 
    ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-primary/10' 
    : 'bg-transparent';

  const textColorClass = scrolled || mobileMenuOpen 
    ? 'text-foreground' 
    : 'text-white drop-shadow-md';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${headerBgClass}`}
    >
      <div className="container-custom flex items-center justify-between h-20 px-4 md:px-8">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Raju Gari Biryani"
            className="h-14 w-14 rounded-full object-cover border-2 border-primary/50 hover:scale-105 transition-transform duration-300"
          />
          <div className="hidden sm:block">
            <h1 className={`font-serif text-lg font-semibold transition-colors ${
               scrolled || mobileMenuOpen ? 'text-foreground' : 'text-white'
            }`}>
              Raju Gari Biryani
            </h1>
            <p className="text-xs text-primary tracking-widest uppercase font-bold">
              Indian Kitchen
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6"> {/* Reduced gap slightly to fit both buttons */}
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`relative group font-sans font-medium text-sm hover:text-primary transition-colors duration-300 ${textColorClass}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          
          {/* 2. ADDED DESKTOP GOOGLE REVIEW BUTTON (Scaled down slightly for header) */}
          <div className="scale-90 origin-right">
             <GoogleReviewBtn />
          </div>

          <motion.button
            onClick={() => scrollToSection("#menu")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-bold shadow-soft hover:bg-gold-dark hover:shadow-[0_0_20px_rgba(255,193,7,0.6)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Order Now
          </motion.button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
          >
            {mobileMenuOpen ? (
              <X className={`w-7 h-7 text-foreground`} />
            ) : (
              <Menu className={`w-7 h-7 ${textColorClass}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 right-0 bg-background border-b border-primary/20 shadow-xl z-40 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-left text-lg font-serif font-medium text-foreground hover:text-primary transition-colors border-b border-border/40 pb-2"
                >
                  {link.name}
                </motion.button>
              ))}

              {/* 3. ADDED MOBILE GOOGLE REVIEW BUTTON */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.15 }}
                 className="pt-2"
              >
                  {/* Just dropping the component here will make it full width if the parent is flex-col */}
                  <div className="w-full flex justify-center">
                    <GoogleReviewBtn />
                  </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToSection("#menu")}
                className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-sm text-lg font-bold shadow-soft hover:bg-gold-dark transition-colors mt-2"
                whileTap={{ scale: 0.98 }}
              >
                Order Now
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;