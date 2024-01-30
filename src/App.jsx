import { useState } from "react";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import Nav from "./components/nav";
import { SHOE_LIST } from "./const";
import Cart from "./components/Cart";

const fakeCartItem = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickCart={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar onClose={() => setIsSidebarOpen(false)} isOpen={isSidebarOpen}>
        <Cart cartItems={fakeCartItem} />
      </Sidebar>
    </div>
  );
}

export default App;
