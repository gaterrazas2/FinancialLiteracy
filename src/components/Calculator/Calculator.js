import "./Calculator.css"
import CalculatorForm from "./CalculatorForm"
import { useState } from "react"
import Card from "../UI/Card"
function Calculator(){
    const [isVisible, setIsVisible] = useState(false)

    function clickHandler(){
        setIsVisible(!isVisible)
    }

    if(!isVisible){
        return(
            <center className="calculator">
                <button onClick={clickHandler}>Loan Calculator</button>
            </center>
        )
    }
    else{
        return(
            <Card>
                <CalculatorForm onCancel ={clickHandler}/>
            </Card>
        )
    }
}

export default Calculator