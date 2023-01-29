import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const deleteButton = (e) => {
        
    let item = e.target.parentElement;
    item.remove()
    
  }

  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <ExpenseDetails
          LocationOfExpenditure={props.LocationOfExpenditure}
          amount={props.amount}
          >
        </ExpenseDetails>
      </div>

      <button onClick={deleteButton} >Delete Expense</button>

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