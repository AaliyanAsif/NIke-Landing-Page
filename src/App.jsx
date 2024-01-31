import { useEffect, useState } from "react";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import Nav from "./components/nav";
import { SHOE_LIST } from "./const";
import Cart from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [curShoe, setCurShoe] = useState(SHOE_LIST[0]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  function toogleDarkMode() {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  }

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickCart={() => setIsSidebarOpen(true)} />
      <ShoeDetail onAdd={addToCart} shoe={curShoe} />
      <NewArrivalSection items={SHOE_LIST} onClickCard={setCurShoe} />
      <Sidebar onClose={() => setIsSidebarOpen(false)} isOpen={isSidebarOpen}>
        <Cart onRemove={removeFromCart} cartItems={cartItems} />
      </Sidebar>
      <div className="fixed bottom-4 right-4 ">
        <button
          onClick={toogleDarkMode}
          className="shadow-lg bg-night-50 text-white px-4 py-2 rounded-full dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
