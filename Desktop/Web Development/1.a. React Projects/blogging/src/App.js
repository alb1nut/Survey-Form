// import './App.css';
import { useState } from "react";
//Components
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddList from "./AddList";
import Search from "./Search";
const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem, setNewItem] = useState("");
  const [search ,setSearch] = useState('')

  

  const setAndSaveItems = (newItems) =>{
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }

  const addList = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems)
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems)
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newItem) return;
     addList(newItem)
    //  e.target.reset();
     setNewItem('')
  };



  return (
    <div className="App">
      <Header />
      <AddList
        addItem={newItem}
        setAddItem={setNewItem}
        handleAdd={handleAdd}
      />
      <Search  
        search ={search}
        setSearch= {setSearch}
        // handleSearch= {handleSearch}

      />
      <Content
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
};

export default App;
