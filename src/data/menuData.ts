export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

export const menuItems: MenuItem[] = [
  // --- Biryani's ---
  { id: 1, name: "Chicken Biryani", price: 7.99, category: "Biryani's", image: "/images/Chicken_biryani.jpg" },
  { id: 2, name: "Chicken 65 Biryani", price: 12.99, category: "Biryani's", image: "/images/chicken_65.png" },
  { id: 3, name: "Spl Chicken Biryani", price: 11.99, category: "Biryani's", image: "/images/Spl_chicken_biryani.jpg" },
  { id: 4, name: "Mutton Biryani", price: 14.99, category: "Biryani's", image: "/images/Mutton_biryani.jpg" },
  { id: 5, name: "Prawns Pulao", price: 10.99, category: "Biryani's", image: "/images/prawns_pulao.jpeg" },
  { id: 6, name: "Chicken Curry with Bagara", price: 6.99, category: "Biryani's", image: "/images/chicken_curry_bagara.webp" },
  { id: 7, name: "Chicken Fry Piece Bagara", price: 8.99, category: "Biryani's", image: "/images/chicken_frypiece_bagara.avif" },
  { id: 8, name: "Chicken Half Joint Bagara", price: 7.99, category: "Biryani's", image: "/images/chicken_halfjoint.jpg" },
  { id: 9, name: "Chicken Full Joint Bagara", price: 10.99, category: "Biryani's", image: "/images/chicken_fulljoint.png" },
  { id: 10, name: "Egg Masala with Bagara", price: 5.99, category: "Biryani's", image: "/images/eggmasala_bagara.jpeg" },
  { id: 12, name: "Veg Curry with Bagara", price: 7.99, category: "Biryani's", image: "/images/vegcurry_bagara.jpg" },
  { id: 13, name: "Biryani Rice Plain", price: 2.99, category: "Biryani's", image: "/images/biryanirice_plain.jpg" },
  { id: 14, name: "Bagara Rice Plain", price: 2.99, category: "Biryani's", image: "/images/Bagararice_plain.jpg" },

  // --- Starters ---
  { id: 15, name: "Chilli Chicken", price: 7.99, category: "Starters", image: "/images/Chilli_Chicken.jpg" },
  { id: 16, name: "Egg Chilli", price: 6.99, category: "Starters", image: "/images/eggchilli.jpg" },
  { id: 17, name: "Chicken Manchuria", price: 8.99, category: "Starters", image: "/images/chickenmanchurian.jpg" },
  { id: 18, name: "Gobi Manchuria", price: 6.99, category: "Starters", image: "/images/Gobimanchurian.jpg" },

  // --- Veg Curries ---
  { id: 19, name: "Aloo Fry", price: 5.99, category: "Veg Curries", image: "/images/Aloofry.jpg" },
  { id: 20, name: "Cabbage Fry", price: 5.99, category: "Veg Curries", image: "/images/cabbagefry.jpg" },
  { id: 21, name: "Dal / Pappu", price: 5.99, category: "Veg Curries", image: "/images/dal.jpg" },
  // ADDED NEW ITEM HERE
  { id: 22, name: "Tomato Curry", price: 5.99, category: "Veg Curries", image: "/images/tomato.jpg" },
  // RENUMBERED ITEMS BELOW
  { id: 23, name: "Rasam - Tomato / Miryala", price: 4.99, category: "Veg Curries", image: "/images/rasam.jpg" },
  { id: 24, name: "Sambhar", price: 4.99, category: "Veg Curries", image: "/images/sambhar.jpg" },
  { id: 25, name: "Gutti Vankay (Brinjal)", price: 7.99, category: "Veg Curries", image: "/images/brinjal.jpg" },
  { id: 26, name: "Raita", price: 3.99, category: "Veg Curries", image: "/images/raita.jpg" },

  // --- Non-Veg Curries ---
  { id: 27, name: "Chicken Curry", price: 6.99, category: "Non-veg Curries", image: "/images/chicken_curry.jpg" },
  { id: 28, name: "Chicken Fry", price: 7.99, category: "Non-veg Curries", image: "/images/chickenfry.jpg" },
  { id: 29, name: "Mutton Curry Telangana", price: 8.99, category: "Non-veg Curries", image: "/images/mutton_curry.jpg" },
  { id: 30, name: "Mutton Roast / Fry", price: 8.99, category: "Non-veg Curries", image: "/images/muttonfry.jpg" },
  { id: 31, name: "Prawns Roast", price: 8.99, category: "Non-veg Curries", image: "/images/prawns_roast.jpg" },
  { id: 32, name: "Chicken Half Joint", price: 7.99, category: "Non-veg Curries", image: "/images/chicken_halfjoint.jpg" },
  { id: 33, name: "Chicken Full Joint", price: 10.99, category: "Non-veg Curries", image: "/images/chicken_fulljoint.png" },
  { id: 34, name: "Egg Masala", price: 5.99, category: "Non-veg Curries", image: "/images/egg_masala.jpg" },
  { id: 35, name: "Egg Burji", price: 5.99, category: "Non-veg Curries", image: "/images/eggburji.jpg" },

  // --- Specials ---
  { id: 36, name: "Peethalu / Crab Fry", price: 15.99, category: "Specials", image: "/images/crabfry.jpg" },
  { id: 37, name: "Chicken Liver Fry", price: 12.99, category: "Specials", image: "/images/chickenliver_fry.jpg" },
  { id: 38, name: "Fish Fry", price: 7.99, category: "Specials", image: "/images/fishfry.jpg" },
  { id: 39, name: "Nalli Bokkala Koora", price: 14.99, category: "Specials", image: "/images/nallibokkal.jpg" },

  // --- Fried Rice & Noodles ---
  { id: 40, name: "Chicken Fried Rice", price: 5.99, category: "Fried Rice & Noodles", image: "/images/chickenfriedrice.jpg" },
  { id: 41, name: "Egg Fried Rice", price: 4.99, category: "Fried Rice & Noodles", image: "/images/eggfriedrice.jpg" },
  { id: 42, name: "Vegetable Fried Rice", price: 3.99, category: "Fried Rice & Noodles", image: "/images/vegetablefriedrice.jpg" },
  { id: 43, name: "Mixed Fried Rice", price: 6.99, category: "Fried Rice & Noodles", image: "/images/mixedfriedrice.jpg" },
  { id: 44, name: "Chicken Noodles", price: 5.99, category: "Fried Rice & Noodles", image: "/images/chicken_noodles.jpg" },
  { id: 45, name: "Egg Noodles", price: 4.99, category: "Fried Rice & Noodles", image: "/images/egg_noodles.jpg" },
  { id: 46, name: "Veg Noodles", price: 3.99, category: "Fried Rice & Noodles", image: "/images/veg_noodles.jpg" },

  // --- Pakodis ---
  { id: 47, name: "Chicken Pakodi (Small 250g)", price: 8.99, category: "Pakodis", image: "/images/chicken_pakodi.jpg" },
  { id: 48, name: "Chicken Pakodi (Medium 500g)", price: 9.99, category: "Pakodis", image: "/images/chicken_pakodi.jpg" },
  { id: 49, name: "Chicken Pakodi (Full 1Kg)", price: 15.99, category: "Pakodis", image: "/images/chicken_pakodi.jpg" },

  // --- Sweets ---
  { id: 50, name: "Double Ka Meetha", price: 3.99, category: "Sweets", image: "/images/doublekameeta.jpg" },
  { id: 51, name: "Gulab Jamun", price: 4.99, category: "Sweets", image: "/images/gulab_jamun.jpg" },
  { id: 52, name: "Buttermilk", price: 0.00, category: "Sweets", image: "/images/buttermilk.jpg" },

  // --- Meals ---
  { id: 53, name: "Veg Meals", price: 5.99, category: "Meals", image: "/images/vegmeals.png" },
  { id: 54, name: "Non Veg Meals", price: 9.99, category: "Meals", image: "/images/nonvegmeals.png" },
];

export const categories = [
  "All",
  "Starters",
  "Biryani's",
  "Veg Curries",
  "Non-veg Curries",
  "Specials",
  "Fried Rice & Noodles",
  "Pakodis",
  "Sweets",
  "Meals"
];

export const getItemsByCategory = (category: string) => {
  if (category === "All") return menuItems;
  return menuItems.filter(item => item.category === category);
};

export const searchItems = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return menuItems.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) || 
    item.category.toLowerCase().includes(lowerQuery)
  );
};