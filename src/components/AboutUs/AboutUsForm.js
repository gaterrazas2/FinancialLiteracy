import "./AboutUsForm.css"
function AboutUsForm(props){
    return(
        <center className="aboutUs-form">
            <h1>Dream Team</h1>
            <h3>Gabriel Terrazas</h3>
            <div>Dedicated instructional assistant with a passion for empowering learners. A proud alumni ambassador for AI4ALL. Currently in my senior year, preparing to make a mark in the world of technology</div>
            <h3>Emilia Rivas</h3>
            <h3>Diego Acosta</h3>
            <button onClick={props.onCancel}>Close</button>
        </center>
    )
}

export default AboutUsForm