import { useState } from "react"
import DefinitionsForm from "./DefinitionsForm"
import "./Definitions.css"
function Defintions(){
    const [isVisible, setIsVisible] = useState(false)

    function showDefinitions(){
        setIsVisible(true)
    }
    function hideDefinitions(){
        setIsVisible(false)
    }

    if(!isVisible){
        return (
            <center className="definition">
                <button onClick={showDefinitions}>Click here for more info!</button>
            </center>
        )
    }
    else{
        return (
            <div>
                <DefinitionsForm onClose={hideDefinitions}/>
            </div>
        )
    }
}

export default Defintions