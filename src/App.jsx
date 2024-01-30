import Card from "./components/Card";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Nav from "./components/nav";
import { SHOE_LIST } from "./const";

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
