import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear]=useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItems
        name={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
        LocationOfExpenditure={props.expenses[0].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
        LocationOfExpenditure={props.expenses[1].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
        LocationOfExpenditure={props.expenses[2].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
        LocationOfExpenditure={props.expenses[3].LocationOfExpenditure}
      ></ExpenseItems>

      {/* <ExpenseItems
        name={props.expenses[4].title}
        amount={props.expenses[4].amount}
        date={props.expenses[4].date}
        // LocationOfExpenditure={props.expenses[3].LocationOfExpenditure}
      ></ExpenseItems> */}
    
    </Card>
  );
}
export default Expenses;