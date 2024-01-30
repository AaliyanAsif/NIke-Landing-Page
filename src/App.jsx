import Card from "./components/Card";
import ShoeDetail from "./components/ShoeDetail";
import Nav from "./components/nav";
import { SHOE_LIST } from "./const";

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      {/* <Nav />
      <ShoeDetail /> */}
      <Card item={SHOE_LIST[0]} />
      {/* {console.log(SHOE_LIST[0].title)} */}
    </div>
  );
}

export default App;
