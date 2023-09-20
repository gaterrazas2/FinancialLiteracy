import Chart from "../Chart/Chart"

function ExpensesChart(props){

    // Set initial data points for every month
    const chartDataPoints = [
        {label : "Jan", value : 0},
        {label : "Feb", value : 0},
        {label : "Mar", value : 0},
        {label : "Apr", value : 0},
        {label : "May", value : 0},
        {label : "Jun", value : 0},
        {label : "Jul", value : 0},
        {label : "Aug", value : 0},
        {label : "Sep", value : 0},
        {label : "Oct", value : 0},
        {label : "Nov", value : 0},
        {label : "Dec", value : 0},
    ]

    // Using props, update the value of each month if there is an expense there
    for(const expense of props.expenses){
        // Starts at 0, January == 0
        const currMonth = expense.date.getMonth()
        // We can use currMonth as an index as january is also in position 0 and so on
        chartDataPoints[currMonth].value += expense.amount

    }
    return(
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpensesChart