import { useState } from "react";
import BackgroundHeading from "./Components/BackgroundHeading";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import Sidebar from "./Components/Sidebar";
import { initialItem } from "./lib/Constants";

function App() {

  const [items,setItems] = useState(initialItem);

  const handleAddItem = (newItemText)=>{

    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items,newItem]
    setItems(newItems)
  }

  const handleDeleteItem = (id)=>{
      const newItems = items.filter((item)=> item.id !==id);
      setItems(newItems);
  }

  const handleToggleItem=(id)=>{
    const newItems = items.map((item)=>{
      if(item.id === id){
        return {...item,packed: !item.packed}
      }

      return item;
    })
    setItems(newItems)
  }

  const handleMarkAllAsComplete = ()=>{
    const newItems = items.map((item)=>{
      return {...item,packed:true}
    })

    setItems(newItems)
  }

  const handleMarkAllAsIncomplete = ()=>{
    const newItems = items.map((item)=>{
      return {...item,packed:false}
    })

    setItems(newItems)
  }

  const handleResetToInitial = ()=>{
    setItems(initialItem)
  }

  const handleRemoveAllItems = ()=>{
    setItems([]);
  }

  

  
  


  return <>
    <BackgroundHeading/>
    <main>
        <Header totalNumbersOfItems={items.length} numberOfItemsChecked={items.filter(item=>item.packed).length} />
        <ItemList handleToggleItem={handleToggleItem} handleDeleteItem={handleDeleteItem}  items={items} />
        <Sidebar handleAddItem={handleAddItem}   handleMarkAllAsComplete={handleMarkAllAsComplete} handleMarkAllAsIncomplete={handleMarkAllAsIncomplete} 
         handleResetToInitial={handleResetToInitial} handleRemoveAllItems={handleRemoveAllItems} />
    </main>
    <Footer/> 
  </>;
}

export default App;
