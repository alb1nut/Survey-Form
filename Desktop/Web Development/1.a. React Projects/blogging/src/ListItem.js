
const  ListItem = ({ item, handleCheck , handleDelete }) => {


  return (
<div className="card" key={item.id}>
                <input checked={item.checked} type="checkbox" onChange={() => handleCheck(item.id)} />
                <label 
                style={item.checked ? {textDecoration : '5px line-through black' } : null}
           
               onDoubleClick={() =>handleCheck(item.id)}>{item.item}</label>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div> 
  );
}

export default ListItem;
