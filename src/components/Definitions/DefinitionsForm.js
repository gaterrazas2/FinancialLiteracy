import Card from "../UI/Card"
import "./DefinitionsForm.css"
function DefinitionsForm(props){
    return(
        <Card className = "definitions-form">
            <center>
                <h2>    
                    Personal Finance
                </h2>
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
                <button onClick={props.onClose}>Close</button>
            </center>
        </Card>
    )
}

export default DefinitionsForm