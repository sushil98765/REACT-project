
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from "react";

function App() {
 
  let [textToShow, setTextState] = useState("Food Item Entered by User");
  let [foodItems, setFoodItems] = useState([
    "Dal", "Roti", "Ghee"

  ]
  );
  
  console.log(`current value of textState :${textToShow}`);


  
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItems = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItems];
      setFoodItems(newItems);
  
    }
    
  };

  //  let foodItems = [];
  
  return <> <Container>
    <h1 className Name="food-heading"> Healthy Foods</h1>
  
  
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <ErrorMessage itemm={foodItems}></ErrorMessage>
    
    <FoodItems itemm={foodItems}></FoodItems>

  </Container>
    {/* <Container> Above is the food healthy written
      
      by Sushil Pal from Uttare Pradesh Mirzapur</Container> */}
</>
}

export default App
