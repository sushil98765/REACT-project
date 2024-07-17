import { useState } from "react";
import Item from "./Item";
const FoodItems = ({itemm}) => {
  // let foodItems = ["Dal", "Roti", "Ghee", "Maggie", "Sabzi", "Namkin"];

  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (items, event) => {
    let newItems=[...activeItems, items];
    setActiveItems(newItems);
    
  }
  return (<ul className Name="list-group">
    {itemm.map((items) => (
      <Item key={items} foodItem={items}
        bought ={activeItems.includes(items)}
        handleBuyButton={(event)=> onBuyButton(items,event)}
      ></Item>
    ))}
  
  </ul>
  );
};
export default FoodItems;