function LoanInfo(props){
    //calculate the payments per month, total amount paid, and total interest
    const monthlyPay = props.amount*((props.interestRate*((1+props.interestRate)**12)) / (((1+props.interestRate)**12) -1))
    // const interestPay = props.amount*(props.interestRate / )  //props.amount*(props.interestRate/12*props.numYears)

    return(
        <center>
            <div>Loan Info</div>
            <div>Monthly Payment: {monthlyPay}</div>
            <div>Number of Years: {props.numYears}</div>
            <div>Interest Rate: {props.interestRate}</div>
            <button onClick={props.onClose}>Close</button>
        </center>
    )
}

export default LoanInfo