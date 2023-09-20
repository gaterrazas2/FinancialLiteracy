import ExpensesContent from "./ExpensesContent";
import Card from '../UI/Card';
import './ExpenseList.css';
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';
import ExpensesChart from "./ExpensesChart";


const ExpenseList = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020')

    function filterData(yearIn) {
        setSelectedYear(yearIn)
    }

    function filterDate(expense) {
        return expense.date.getFullYear().toString() === selectedYear
    }

    // Changes array to contain only expenses from the selected year
    let filteredData = props.expenses.filter(filterDate)

    // Card is the styling
    // Expenses filter is the dropdown menu that allows you to select a year
    // Content is the array of expense items retrieved from the map function above
    // it is all wrapped in a final div to be able to be returned properly  
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onFilter={filterData}/>
                <ExpensesChart expenses={filteredData}/>
                <ExpensesContent items={filteredData}/>
            </Card>
        </div>
      );
}

export default ExpenseList