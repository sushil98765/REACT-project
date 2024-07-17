import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here "
      className Name={styles.foodInput}
      onKeyDown={handleKeyDown}
    ></input>
  )
  
}
export default FoodInput;