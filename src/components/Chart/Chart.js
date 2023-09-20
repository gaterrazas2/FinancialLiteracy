import ChartBar from "./ChartBar"
import "./Chart.css"

function Chart(props){

    // Turning the array of objects from ExpensesChart.js into an array of numbers for the max() method to use
    // Array of 12 values, one for each month
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)

    //Spread operator is used to take the array of numbers and turn it into a list of arguments for the max method
    const totalMax = Math.max(...dataPointValues)
    return(
        <div className="chart">
            {props.dataPoints.map((dataPoints => 
                <ChartBar 
                    key={dataPoints.label} 
                    value={dataPoints.value} 
                    maxValue={totalMax} 
                    label={dataPoints.label}
                />    
            ))}
        </div>
    )
}

export default Chart