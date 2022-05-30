import "./index.css";
import ListItem from "./ListItem";

const Content = ({ items, handleCheck, handleDelete}) => {




  return (
    <main className="App">
      {items.length > 0 ? (
        <div>
            {items.map((item) => (
              <ListItem  item={item} handleCheck={handleDelete} handleDelete={handleDelete}/>
              
            ))}
          </div>
      ) : (
        <div style={{
            backgroundColor :'rgb(10, 77, 19)',
            padding: ' 40px 150px',
            borderRadius: '5px',
            color: '#fff',
            margin: 'auto',
        }}>
          <h2>No Item on List</h2>
        </div>
      )}
    </main>
  );
};

export default Content;

// import { useState } from "react";
// //Components

// const Content = () => {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       checked: true,
//       item: "Fish",
//     },
//     {
//       id: 2,
//       checked: false,
//       item: "Meat",
//     },
//     {
//       id: 3,
//       checked: false,
//       item: "Drink",
//     },
//   ]);

//   const handleCheck = (id) => {
//     const listItems = items.map((item) =>
//       item.id === id ? { ...item, checked: !item.checked } : item
//     );
//     setItems(listItems);
//     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
//   };

//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id !== id);
//     setItems(listItems);
//     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
//   };

// //   const item ={
// //      width: '200px'
// //   }

//   return (
//     <main className="App">
//       {items.length ? (
//         <ul style={{

//         }}>
//           {items.map((item) => (
//             <div className={item} key={item.id}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheck(item.id)}
//                 checked={item.checked}
//               />
//               <label
//                 style={item.checked ? { textDecoration: "line-through" } : null}
//                 onDoubleClick={() => handleCheck(item.id)}
//               >
//                 {item.item}{" "}
//               </label>
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//             </div>
//           ))}
//         </ul>
//       ) : (
//         <h2>No List Item</h2>
//       )}
//     </main>
//   );
// };

// export default Content;
