import Card from "../UI/Card"
import "./DefinitionsForm.css"
import "./Definitions.css"
function DefinitionsForm(props){
    return(
        <Card className = "definitions-form">
            <center>
                <h2>    
                    Personal Finance
                    
                    - Personal finance manages money for goals.

                    - Involves goal setting, budgeting, saving, investing, and asset protection.

                    - Builds financial security and peace of mind.
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
                <h2>
                    Investing
                </h2>
            </center>
            <center className="definition">
                <button onClick={props.onClose}>Close</button>
            </center>
        </Card>
    )
}

export default DefinitionsForm