import ExpenseItems from "./ExpenseItems";
import './ExpensesList.css'

const ExpensesList = props => {
    

  let message = "";

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expense!.</h2>
  }



  else if (props.items.length === 1) {
    message=<p>Only single Expense here. Please add more...</p>

  }

  return (
    <ul className="expenses-list__fallback">
        
        {props.items.map((expense) => (
            <ExpenseItems
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
            />
            
        ))}
        {message}
    </ul>
  )


};

export default ExpensesList;