import ExpenseList from "./components/Expenses/ExpenseList"
import NewExpense from "./components/newExpense/NewExpense"
import Calculator from "./components/Calculator/Calculator";
import React, {useState} from "react"
import Defintions from "./components/Definitions/Definitions";

function App() {
  const [expenses, setExpenses_arr] = useState([]);

  function addExpense(enteredExpenseData){
    setExpenses_arr(prevExpenses => {
      return [enteredExpenseData, ...prevExpenses]

    });
  }
  
  return (
    <div>
      <Defintions/>
      <Calculator/>
      <NewExpense onAddExpense={addExpense}/>
      <ExpenseList expenses = {expenses}/>
    </div>
  )
}

export default App;
