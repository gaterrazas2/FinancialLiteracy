import { useState } from "react"
import Card from "../UI/Card"
import AboutUsForm from "./AboutUsForm.js"
import "./AboutUs.css"
function AboutUs(){
    const [isVisible, setIsVisible] = useState(false)

        function clickHandler(){
            setIsVisible(!isVisible)
        }

        if(!isVisible){
            return(
                <center className="aboutUs">
                    <button onClick={clickHandler}>About us</button>
                </center>
            )
        }
        else{
            return(
                <Card className="aboutUs">
                    <AboutUsForm onCancel ={clickHandler}/>
                </Card>
            )
        }
}
export default AboutUs