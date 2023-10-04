import Card from "../UI/Card"
import "./DefinitionsForm.css"
import "./Definitions.css"
import { useState } from "react"
import PersonalFinance from "../Topics/PersonalFinance";
function DefinitionsForm(props){
    const [personalFinance, setPersonalFinance] = useState(false);

    function close(){
        setPersonalFinance(false);
    }

    function showPersonalFinance(){
        setPersonalFinance(true);
    }
    return(
        <Card className = "definitions-form">
            <center>
                <button onClick={showPersonalFinance}>    
                    Personal Finance
                </button>
            </center>
            <center>
                <h2>
                    Budget
                </h2>
            </center>
            <center>
                <h2>
                    Financial Institutions
                </h2>
            </center>
            <center>
                <h2>
                    Savings
                </h2>
            </center>
            <center>
                <h2>
                    Credit
                </h2>
            </center>
            <center>
                <h2>
                    Debt/Loans
                </h2>
            </center>
            <center>
                <h2>
                    Investing
                </h2>
            </center>
            <center className="definition">
                <button onClick={props.onClose}>Close</button>
            </center>
            <div>{personalFinance && <PersonalFinance onClose={close}/>}</div>
        </Card>
    )
}

export default DefinitionsForm