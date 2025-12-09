import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Franchise from '@/components/Franchise';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import FloatingActions from '@/components/FloatingActions';
import { CartProvider } from '@/context/CartContext';

const Index = () => {
  // LIFTED STATE: Controls the Filter Drawer
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <CartProvider>
      {/* UPDATED WRAPPER: Enforces width and hides horizontal overflow */}
      <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden relative flex flex-col">
        <Header />
        <main className="flex-grow w-full">
          <Hero />
          <About />
          
          {/* Pass state to MenuSection so it can show the Drawer */}
          <MenuSection 
            isFilterOpen={isFilterOpen} 
            setIsFilterOpen={setIsFilterOpen} 
          />
          
          <Franchise />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        
        {/* Pass trigger function to FloatingActions */}
        <FloatingActions onFilterClick={() => setIsFilterOpen(true)} />
      </div>
    </CartProvider>
  );
};

export default Index;