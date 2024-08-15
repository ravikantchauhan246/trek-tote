import BackgroundHeading from "./Components/BackgroundHeading";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import Sidebar from "./Components/Sidebar";

function App() {
  return <>
    <BackgroundHeading/>
    <main>
        <Header/>
        <ItemList/>
        <Sidebar/>
    </main>
    <Footer/>
  </>;
}

export default App;
