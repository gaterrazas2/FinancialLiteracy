import Card from "../UI/Card"
import "./DefinitionsForm.css"
import "./Definitions.css"
import { useState } from "react"
import PersonalFinance from "../Topics/PersonalFinance";
import Budgeting from "../Topics/Budgeting";
import FinancialInstitutions from "../Topics/FinancialInstitutions";
import Savings from "../Topics/Savings";
import Credit from "../Topics/Credit";
import DebtLoans from "../Topics/DebtLoans";
import Investing from "../Topics/Investing";
function DefinitionsForm(props){
    const [personalFinance, setPersonalFinance] = useState(false);
    const [budgeting, setBudgeting] = useState(false);
    const [financialInstitutions, setFinancialInstitutions] = useState(false);
    const [savings, setSavings] = useState(false);
    const [credit, setCredit] = useState(false);
    const [debtLoans, setDebtLoans] = useState(false);
    const [investing, setInvesting] = useState(false);

    function showPersonalFinance(){
        setPersonalFinance(!personalFinance);
    }

    function showBudgeting(){
        setBudgeting(!budgeting);
    }

    function showFinancialInstitutions(){
        setFinancialInstitutions(!financialInstitutions);
    }

    function showSavings(){
        setSavings(!savings);
    }

    function showCredit(){
        setCredit(!credit);
    }

    function showDebtLoans(){
        setDebtLoans(!debtLoans);
    }

    function showInvesting(){
        setInvesting(!investing);
    }
    return(
        <Card className="definition">
            <center>
                <button onClick={showPersonalFinance}>    
                    Personal Finance
                </button>
                <button onClick={showBudgeting}>
                    Budgeting
                </button>
                <button onClick={showFinancialInstitutions}>
                    Financial Institutions
                </button>
                <button onClick={showSavings}>
                    Savings
                </button>
                <button onClick={showCredit}>
                    Credit
                </button>
                <button onClick={showDebtLoans}>
                    Debt/Loans
                </button>
                <button onClick={showInvesting}>
                    Investing
                </button>
                <div/>
                <button onClick={props.onClose}>Close</button>
            </center>
            <div>{personalFinance && <PersonalFinance onClose={showPersonalFinance}/>}</div>
            <div>{budgeting && <Budgeting onClose={showBudgeting}/>}</div>
            <div>{financialInstitutions && <FinancialInstitutions onClose={showFinancialInstitutions}/>}</div>
            <div>{savings && <Savings onClose={showSavings}/>}</div>
            <div>{credit && <Credit onClose={showCredit}/>}</div>
            <div>{debtLoans && <DebtLoans onClose={showDebtLoans}/>}</div>
            <div>{investing && <Investing onClose={showInvesting}/>}</div>
        </Card>
    )
}

export default DefinitionsForm