import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){

    // State used to show or not show the form
    const [isVisible, setIsVisible] = useState(false)

    // handles form submission and uses the onAddExpense button passed down from App.js
    function submitHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        closeForm()
    }  

    function openForm(){
        setIsVisible(true)
    }

    function closeForm(){
        setIsVisible(false)
    }

    // if isVisible is false, show only the add expense button
    if(!isVisible){
        return(
            <div className="new-expense">
                <button onClick={openForm}>Add Expense</button>
            </div>
        )
    }

    // Show the actual form
    return (
        <div className="new-expense">
            <ExpenseForm onSubmit={submitHandler} onCancel={closeForm}/>
        </div>
    )
}

export default NewExpense;
