import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "447940392567"; 
const CURRENCY_SYMBOL = "£";
// ---------------------

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, clearCart, totalPrice, removeItem } = useCart();

  // --- LOGIC: Handle Browser Back Button ---
  // Simplified: Just closes the drawer if back button is pressed
  useEffect(() => {
    if (isCartOpen) {
      window.history.pushState({ cartOpen: true }, "");

      const handlePopState = () => {
        setIsCartOpen(false); // Close cart
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [isCartOpen, setIsCartOpen]);

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderDetails = items
      .map((item) => `${item.quantity}x ${item.name} - ${CURRENCY_SYMBOL}${(item.price * item.quantity).toFixed(2)}`)
      .join("\n");

    const message = `New Order from Raju Gari Biryani\n\n${orderDetails}\n\nTotal: ${CURRENCY_SYMBOL}${totalPrice.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    
    // Optional: You can uncomment the next line if you want the cart to close automatically after clicking
    // setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[150]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-[200] flex flex-col border-l border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-background/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-xl font-bold text-foreground">Your Cart</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 bg-secondary/10">
              {items.length === 0 ? (
                <div className="text-center py-20 flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-primary/50" />
                  </div>
                  <p className="text-foreground font-medium text-lg mb-2">Your cart is empty</p>
                  <p className="text-muted-foreground text-sm mb-8">Add some delicious items to get started!</p>
                  
                  {/* Empty State Button */}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-soft hover:bg-gold-dark transition-colors"
                  >
                    Start Ordering
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex gap-4 bg-card rounded-xl p-3 shadow-sm border border-border/50"
                    >
                      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-secondary">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-foreground text-sm line-clamp-2 pr-2">{item.name}</h3>
                          <p className="text-primary font-bold text-sm whitespace-nowrap">
                            {CURRENCY_SYMBOL}{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3 bg-secondary/50 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center bg-background rounded-md shadow-sm text-foreground hover:text-primary transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-background rounded-md shadow-sm text-foreground hover:text-primary transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-border bg-background space-y-4">
                <div className="flex items-center justify-between text-lg mb-2">
                  <span className="text-muted-foreground font-medium">Total</span>
                  <span className="font-sans text-3xl font-black text-foreground">
                    {CURRENCY_SYMBOL}{totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Direct Order via WhatsApp Button (No Confirmation) */}
                <motion.button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-soft hover:bg-[#20bd5a] transition-all"
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Order via WhatsApp
                </motion.button>

                <div className="text-center space-y-2">
                    <button
                      onClick={clearCart}
                      className="w-full py-3 border-2 border-destructive text-destructive rounded-xl font-bold hover:bg-destructive hover:text-white transition-colors"
                    >
                      Clear Cart
                    </button>
                    <p className="text-[10px] text-muted-foreground/70">
                      💬 You will be redirected to WhatsApp to complete your order
                    </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;  