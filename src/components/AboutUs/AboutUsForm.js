import "./AboutUsForm.css"
function AboutUsForm(props){
    return(
        <center className="aboutUs-form">
            <h1>Dream Team</h1>
            <h2>Gabriel Terrazas</h2>
            <h2>Emilia Rivas</h2>
            <h2>Diego Acosta</h2>
            <button onClick={props.onCancel}>Close</button>
        </center>
    )
}

export default AboutUsForm