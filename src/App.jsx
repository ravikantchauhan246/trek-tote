import { useState } from "react";
import BackgroundHeading from "./Components/BackgroundHeading";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import Sidebar from "./Components/Sidebar";
import { initialItem } from "./lib/Constants";

function App() {

  const [items,setItems] = useState(initialItem);



  return <>
    <BackgroundHeading/>
    <main>
        <Header/>
        <ItemList items={items} />
        <Sidebar setItems={setItems} />
    </main>
    <Footer/>
  </>;
}

export default App;
