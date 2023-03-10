import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItems = (props) => {

  const deleteButton = (e) => {
        
    let item = e.target.parentElement;
    console.log(item)
    item.remove()
    
  }

  // const [title,setTitle] = useState(props.title)
  // const [amount,setAmount] = useState(props.amount)

  // const editButton = (e) => {
  //   setTitle("Updated!")
  //   setAmount("$100")
  // }

  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <ExpenseDetails
          LocationOfExpenditure={props.LocationOfExpenditure}
          amount={props.amount}
          >
        </ExpenseDetails>

      </div>

      <button onClick={deleteButton} > Delete Expense</button>
      {/* <button onClick={editButton} > Edit Expense</button> */}

    </Card>
  );
}

// function ExpenseItems(props) {
//   return (
//     <div className="expense-item">
//       <ExpenseDate date={props.data.date}></ExpenseDate>
//       <ExpenseDetails
//         amount={props.data.amount}
//         LocationOfExpenditure={props.data.LocationOfExpenditure}
//       ></ExpenseDetails>
//       <div className="expense-item__description">
//         <h2>{props.data.name}</h2>
//       </div>
//     </div>
//   );
// }

export default ExpenseItems;