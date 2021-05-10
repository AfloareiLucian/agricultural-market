import React from "react"
import { Link } from "react-router-dom"
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import "../Styling/Footer.css";
import footer_logo from "../UI/footer_logo.png";

class Footer extends React.Component {
    render() {
        return (
            <div style={{position: "relative", width:"100%", bottom: "0px"}}>
                <div id="links">
                    
                    <ul>
                        <li style={{fontWeight:"bold",fontSize:"15px",color:"rgb(0, 47, 82)"}}>CATEGORII POPULARE</li>
                        <li>Legume</li>
                        <li>Cereale</li>
                        <li>Seminte</li>
                        <li>Ingrasaminte</li>
                    </ul>
                    
                    <ul>
                        <li style={{fontWeight:"bold",fontSize:"15px",color:"rgb(0, 47, 82)"}}>CAUTARI POPULARE</li>
                        <li>Grau</li>
                        <li>Cartofi</li>
                        <li>Orz</li>
                        <li>Porumb</li>
                    </ul>
                </div>
             <div className="text-light" style={{backgroundColor:"#002f34",height:"50px",lineHeight:"50px" }}>
                 <span style={{marginLeft:"5%"}}>Powered by IndexError </span>
                 <img id="footer_logo" src={footer_logo} alt="" />
             </div>
                

            </div>
        )
    }
}
export default Footer;