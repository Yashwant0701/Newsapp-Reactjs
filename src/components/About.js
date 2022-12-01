import {Container,Row,Col} from "react-bootstrap";
import Brandlogo from '../assets/newslogo.png'
const About=()=>{
    return(
<Container>
<h1 style={{textAlign:"center"}}>About Us</h1> <br></br>

<Row>
    <Col md={5}>
        <img src={Brandlogo} style={{height:'300px'}} alt="logo"/>
    </Col>
    <Col>
    <p style={{lineHeight:"2",backgroundColor:"#eee",borderRadius:"15px"}}><b>News App </b>is a news website that enables browsing and access to several news feed. It also allows the users to access news feed based on the country they have selected.News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. News is sometimes called "hard news" to differentiate it from soft media.

Common topics for news reports include war, government, politics, education, health, the environment, economy, business, fashion, entertainment, and sport, as well as quirky or unusual events. Government proclamations, concerning royal ceremonies, laws, taxes, public health, and criminals, have been dubbed news since ancient times. Technological and social developments, often driven by government communication and espionage networks, have increased the speed with which news can spread, as well as influenced its content. </p>
    </Col>
</Row>


</Container>

    )

}
export default About