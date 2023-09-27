import { useState } from "react";
function CalculatorForm(props){

    const [enteredTotalAmount, setEnteredTotalAmount] = useState('');
    const [enteredNumberofYears, setEnteredNumberofYears] = useState('');
    const [enteredInterestRate, setEnteredInterestRate] = useState('');

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
        const loanData = {
            amount: enteredTotalAmount,
            numYears: enteredNumberofYears,
            interestRate: enteredInterestRate
        }
        props.onSubmit(loanData)
        setEnteredNumberofYears('');
        setEnteredInterestRate('');
        setEnteredTotalAmount('');
    }
    return( <form onSubmit={submitHandler}>
        <div className='new-expense__controls'> 
            <div className='new-expense__control'> 
                <label>Total Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredTotalAmount
    } onChange={totalAmountChanger} required/>
            </div>

            <div className='new-expense__control'> 
                <label># of Years</label>
                <input type="number" min="1" step="1" value={enteredNumberofYears} onChange={numberOfYearsChanger} required/>
            </div>

            <div className='new-expense__control'> 
                <label>Interest rate</label>
                <input type="number" min="1" step="1" value={enteredInterestRate} onChange={interstRateChanger} required/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Close</button>
            <button type="submit">Calculate</button>
        </div>
    </form>
    )
}

export default CalculatorForm