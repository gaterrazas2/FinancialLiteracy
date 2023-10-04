import { useState } from "react";
import LoanInfo from "./LoanInfo";
import Card from "../UI/Card";
import "./CalculatorForm.css"
import "../newExpense/NewExpense.css"
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
            <form onSubmit={submitHandler} className="calculator">
                <center className='new-expense__control'>
                    <label className='new-expense__control'>Total Amount</label>
                    <div/>
                    <input type="number" min="0.01" step="0.01" value={enteredTotalAmount} onChange={totalAmountChanger} required/>
                    <div/>
                    <label className='new-expense__control'>Number of Years</label>
                    <div/>
                    <input type="number" min="1" step="1" value={enteredNumberofYears} onChange={numberOfYearsChanger} required/> 
                    <div/>   
                    <label className='new-expense__control'>Interest rate</label>
                    <div/>
                    <div/>
                    <input type="number" min=".01" step=".01" value={enteredInterestRate} onChange={interstRateChanger} required/>
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