import Card from '../UI/Card'
import './LoanInfo.css'
function LoanInfo(props){
    // compound interest formula
    const amount = props.amount
    const numYears = props.numYears
    const interestRate = props.interestRate
    const temp = amount * ((1 + interestRate) ** numYears)
    const loanTotal = temp.toFixed(2)

    return(
        <Card className="loan">
            <h2>Loan Info</h2>
            <h3>Amount: {props.amount}</h3>
            <h3>Number of Years: {props.numYears}</h3>
            <h3>Interest Rate: {props.interestRate}</h3>
            <h3>Loan Total: {loanTotal}</h3>
            <button onClick={props.onClose}>Close</button>
        </Card>
    )
}

export default LoanInfo