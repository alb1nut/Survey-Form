// import './App.css';
import { useState } from 'react';
//Components
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import AddList from './AddList'
const  App = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Fish",
    },
    {
      id: 2,
      checked: false,
      item: "Meat",
    },
    {
      id: 3,
      checked: false,
      item: "Milk",
    },
  ]);

  const [ addItem , setAddItem] = useState('')

  const handleCheck = (id) => {
    const itemList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemList);
    localStorage.setItems("shoppinglist", JSON.stringify(itemList));
  };

  const handleDelete = (id) => {
    const itemList = items.filter((item) => item.id !== id);
    setItems(itemList);
    localStorage.setItems('shoppinglist' , JSON.stringify(itemList))
  };

  const handleAdd = (e)=>{
    e.preventDefault()
    console.log("Submited");
    // console.log(setAddItem(e.target.value));
  }
  
  return (
    <div className="App">
      <Header/>
      <AddList 
       addItem={addItem} 
       setAddItem={setAddItem}
       handleAdd={handleAdd}
        />
      <Content items={items}  handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer  length={items.length}/>

    </div>
  );
}

export default App;
