import styles from "./Items.module.css";

const Item = ({ foodItem,bought ,handleBuyButton}) => {
  return <li className Name={ `${styles["kg-item"]} list-group-item ${bought && 'active'}`}><span className Name={styles["kg-span"]}>{foodItem}
  </span>
    <button
      className Name={`${styles.button} btn btn-info`}
      onClick ={handleBuyButton}
    >Buy</button>
  </li>;
};
export default Item;