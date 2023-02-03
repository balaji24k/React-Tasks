// import ExpenseItems from "./components/ExpenseItems";when we use maps
import React, { useState } from 'react';
import Expenses from "./components/ExpenseList/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "el",
    title: "Food",
    amount: 500,
    date: new Date(2022, 7, 15),
    // LocationOfExpenditure: "Restaurent Hyd",
  },
  {
    id: "bl",
    title: "Shopping",
    amount: 5000,
    date: new Date(2021, 10, 12),
    // LocationOfExpenditure: "Trends",
  },
  {
    id: "ml",
    title: "Movie",
    amount: 1000,
    date: new Date(2020, 6, 13),
    // LocationOfExpenditure: "Imax Hyd",
  },
  {
    id: "cl",
    title: "Tour",
    amount: 20000,
    date: new Date(2022, 4, 12),
    // LocationOfExpenditure: "goa trip",
  },
  {
    id: "xl",
    title: "Dinner",
    amount: 1200,
    date: new Date(2021, 8, 12),
    // LocationOfExpenditure: "goa trip",
  },

];


const App = () => {

  const [expenses,setExpenses] = useState(dummyExpenses);
  

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);

    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <h1>let's start</h1>
      <h2>ExpenseItems Details</h2>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      {/* return React.createElement('div',{},
  React.createElement(Expenses,{items:expenses})); react object code */}
    </div>
  );
}

export default App;