import React from "react"
import ExpenseItem from "./ExpenseItem"
import "./ExpensesContent.css"

// Conditional CSS !
const ExpensesContent = props => {

    // If there is no content, render something in a different style
    if(props.items.length === 0){
        return(
            <h2 className="expenses-content__fallback">
                No Expenses found
            </h2>
        )
    }

    // If there is, render the data 
    return (
        <ul className="expenses-content">
            {props.items.map((expense_data) => 
                <ExpenseItem
                    key={expense_data.id}
                    title={expense_data.title}
                    amount={expense_data.amount}
                    date={expense_data.date}
                />
            )}
        </ul>
    )
}

export default ExpensesContent