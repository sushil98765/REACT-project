const ErrorMessage = ({itemm}) => {
  // let foodItems = ["Dal", "Roti", "Ghee", "Maggie", "Sabzi", "Namkin"];
  //  let foodItems = [];

  return<>{itemm.length === 0 && <h3>I am still Hungry.</h3> }
    </>
}
export default ErrorMessage;