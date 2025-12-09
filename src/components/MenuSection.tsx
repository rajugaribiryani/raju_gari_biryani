import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { categories, getItemsByCategory, MenuItem, menuItems } from '@/data/menuData';
import MenuCard from "./MenuCard";
import { useCart, CartItem } from '@/context/CartContext';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

// Props Interface for the Filter Logic
interface MenuSectionProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (isOpen: boolean) => void;
}

const MenuSection = ({ isFilterOpen, setIsFilterOpen }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { items: cartItems } = useCart();
  const isMobile = useIsMobile();

  // Filter logic
  const filteredItems = (() => {
    let items = activeCategory === 'All' ? menuItems : getItemsByCategory(activeCategory);
    if (searchQuery.trim()) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return items;
  })();

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setIsFilterOpen(false);
  };

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-sans">
              Explore
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Royal <span className="text-primary">Menu</span>
          </h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-3 mb-8 max-w-md mx-auto"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors shadow-sm"
            />
          </div>
        </motion.div>

        {/* Mobile Filter Drawer */}
        <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <DrawerContent className="bg-background border-border">
            <DrawerHeader className="border-b border-border">
              <DrawerTitle className="font-serif text-xl text-foreground text-center">
                Filter by Category
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`w-full px-4 py-3 text-left text-base font-sans font-medium rounded-sm transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground border-primary shadow-md'
                      : 'bg-card text-foreground border-border hover:border-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </DrawerContent>
        </Drawer>

        {/* Desktop Category Filter */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-sans font-medium rounded-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Mobile Active Category Badge */}
        {isMobile && activeCategory !== 'All' && (
          <div className="flex justify-center mb-6">
             <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 flex items-center gap-2">
               Showing: {activeCategory}
               <button onClick={() => setActiveCategory('All')} className="ml-1">
                  <X className="w-3 h-3" />
               </button>
             </span>
          </div>
        )}

        {/* RESPONSIVE MENU GRID */}
        <motion.div
          layout
          className={`grid gap-4 ${
            isMobile 
              ? 'grid-cols-1' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                className="col-span-full text-center py-12 text-muted-foreground"
              >
                No dishes found matching "{searchQuery}"
              </motion.div>
            ) : (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="h-full"
                >
                  <MenuCard item={item} index={index} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;