// import ExpenseItems from "./components/ExpenseItems";when we use maps
// import React from 'react'; if we write code in react object
import Expenses from "./components/ExpenseList/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {


  const expensesData = [
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
      date: new Date(2022, 10, 12),
      // LocationOfExpenditure: "Trends",
    },
    {
      id: "ml",
      title: "Movie",
      amount: 1000,
      date: new Date(2022, 6, 13),
      // LocationOfExpenditure: "Imax Hyd",
    },
    {
      id: "cl",
      title: "Tour",
      amount: 20000,
      date: new Date(2022, 4, 12),
      // LocationOfExpenditure: "goa trip",
    },
 
  ];


  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);
    console.log("appJs")

    expensesData.push(expense);
    console.log(expensesData);

  }

  return (
    <div>
      <h1>let's start</h1>
      <h2>ExpenseItems Details</h2>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expensesData} />
      {/* return React.createElement('div',{},
  React.createElement(Expenses,{items:expenses})); react object code */}
    </div>
  );
}

export default App;