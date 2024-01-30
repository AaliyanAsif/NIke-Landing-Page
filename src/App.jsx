import { useEffect, useState } from "react";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import Nav from "./components/nav";
import { SHOE_LIST } from "./const";
import Cart from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";

const fakeCartItem = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [curShoe, setCurShoe] = useState(SHOE_LIST[0]);

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
  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickCart={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={curShoe} />
      <NewArrivalSection items={SHOE_LIST} onClickCard={setCurShoe} />
      <Sidebar onClose={() => setIsSidebarOpen(false)} isOpen={isSidebarOpen}>
        <Cart cartItems={fakeCartItem} />
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
