import { useEffect, useState } from 'react';
import BackgroundHeading from './Components/BackgroundHeading';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ItemList from './Components/ItemList';
import Sidebar from './Components/Sidebar';
import ItemsContextProvider from './Contexts/ItemsContextProvider';

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
