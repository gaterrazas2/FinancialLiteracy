import { useState } from "react";
import LoanInfo from "./LoanInfo";
import Card from "../UI/Card";
function CalculatorForm(props){

    const [enteredTotalAmount, setEnteredTotalAmount] = useState('');
    const [enteredNumberofYears, setEnteredNumberofYears] = useState('');
    const [enteredInterestRate, setEnteredInterestRate] = useState('');
    const [resultsVisible, setResultsVisible] = useState(false);
    const [loanData, setLoanData] = useState({
        amount: 0,
        numYears: 0,
        interestRate: 0 
    })

    // Functions for updating the form
    function totalAmountChanger(event){
        setEnteredTotalAmount(event.target.value);
    }

    function numberOfYearsChanger(event){
        setEnteredNumberofYears(event.target.value);
    }

    function interstRateChanger(event){
        setEnteredInterestRate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        setLoanData({
            amount: enteredTotalAmount,
            numYears: enteredNumberofYears,
            interestRate: enteredInterestRate
        })
        setEnteredNumberofYears(0);
        setEnteredInterestRate(0);
        setEnteredTotalAmount(0);
        setResultsVisible(true)
    }

    function closeHandler(){
        setResultsVisible(false)
    }

    if(!resultsVisible){
    return( 
        <Card>
            <form onSubmit={submitHandler}>
                <center>
                    <label>Total Amount</label>
                    <div/>
                    <input type="number" min="0.01" step="0.01" value={enteredTotalAmount} onChange={totalAmountChanger} required/>
                    <div/>
                    <label>Number of Years</label>
                    <div/>
                    <input type="number" min="1" step="1" value={enteredNumberofYears} onChange={numberOfYearsChanger} required/> 
                    <div/>   
                    <label>Interest rate</label>
                    <div/>
                    <input type="number" min="1" step="1" value={enteredInterestRate} onChange={interstRateChanger} required/>
                    <div/>
                    <button type="submit">Calculate</button>
                    <button type="button" onClick={props.onCancel}>Close</button>
                </center>
            </form>
        </Card>
    )
    } 
    else{
        return(
            <LoanInfo onClose={closeHandler} amount={loanData.amount} numYears={loanData.numYears} interestRate={loanData.interestRate}/>
        )
    }  
}

export default CalculatorForm