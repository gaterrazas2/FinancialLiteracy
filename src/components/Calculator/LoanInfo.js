function LoanInfo(props){


    return(
        <center>
            <div>Loan Info</div>
            <div>Amount: {props.amount}</div>
            <div>Number of Years: {props.numYears}</div>
            <div>Interest Rate: {props.interestRate}</div>
            <button onClick={props.onClose}>Close</button>
        </center>
    )
}

export default LoanInfo