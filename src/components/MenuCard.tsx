import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard = ({ item, index }: MenuCardProps) => {
  const { items, addItem, updateQuantity } = useCart();
  
  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addItem(item);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, quantity - 1);
  };

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group w-full h-full bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-row md:flex-col p-2 md:p-0 gap-3 md:gap-0"
    >
      {/* IMAGE SECTION */}
      <div className="shrink-0 relative">
        <div className="w-28 h-28 md:w-full md:h-56 overflow-hidden rounded-lg md:rounded-none bg-secondary relative">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay (Desktop Only) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex-1 flex flex-col justify-between md:p-5 min-w-0">
        <div className="mb-2">
          <div className="flex justify-between items-start gap-2">
            {/* Title */}
            <h3 className="font-serif font-bold text-foreground text-base md:text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {item.name}
            </h3>
          </div>
          
          {/* UPDATED PRICE LOGIC HERE */}
          <p className="text-amber-600 font-black text-lg mt-1">
            {item.price === 0 ? (
              <span className="text-green-600 font-bold text-base uppercase tracking-wider">
                Complimentary
              </span>
            ) : (
              `£${item.price.toFixed(2)}`
            )}
          </p>

          {/* Description (Desktop Only) */}
          {item.description && (
            <p className="text-muted-foreground text-xs mt-2 line-clamp-2 hidden md:block">
              {item.description}
            </p>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-auto">
          {quantity === 0 ? (
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 md:py-2.5 bg-primary text-primary-foreground rounded-lg text-xs md:text-sm font-bold shadow-sm hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </motion.button>
          ) : (
            // Quantity Selector
            <div className="flex items-center justify-between bg-secondary/50 rounded-lg p-1 border border-primary/20">
              <motion.button
                onClick={handleDecrement}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center bg-background rounded-md shadow-sm text-foreground hover:text-primary transition-colors border border-border"
              >
                <Minus className="w-3 h-3 font-bold" />
              </motion.button>
              
              <span className="font-black text-foreground w-6 text-center text-sm md:text-base">
                {quantity}
              </span>
              
              <motion.button
                onClick={handleIncrement}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center bg-background rounded-md shadow-sm text-foreground hover:text-primary transition-colors border border-border"
              >
                <Plus className="w-3 h-3 font-bold" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;