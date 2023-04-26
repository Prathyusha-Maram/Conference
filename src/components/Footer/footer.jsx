import "../Footer/footer.css"
import logo from "../../assets/logo.jpg"
import { Facebook,Linkedin,Mail,Youtube,Instagram } from "react-feather";
export const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="footerLeft">
                <img src={logo} alt="logo" className="logo"/>
                <h5 className="title">Northwest Missouri State University</h5>
                <p className="address">800 University Drive</p>
                <p className="address">Maryville, MO 64468 USA</p>
                <p className="address">
                660.562.1212
                </p>  
                <div className="abouticon">
                    <Facebook size={20}/>
                    <p className="iconName"></p>
                    <Linkedin size={20}/>
                    <p className="iconName"></p>
                    <Mail size={20}/>
                    <p className="iconName"></p>
                    <Youtube size={20}/>
                    <p className="iconName"></p>
                    <Instagram size={20}/>
                    <p className="iconName"></p>
                    
                    
                </div>
               
                
            </div>
            <div className="footerRight">
                <h2 style={{fontSize:"20px"}}>USEFUL LINKS</h2>
                <div className="abouticon">
                    <p className="iconName">Home</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">About us</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">Services</p>
                </div> 
                <div className="abouticon">
                    <p className="iconName">Termes of services</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">Privacy Policy</p>
                </div>
                <div className="btn knowMore">
                    <a href="#" className="knowMoreLink">Report an Incident</a>
                </div>
            </div>
            <div className="footerRight">
                <h2 style={{fontSize:"20px"}}>CONFERENCE LINKS</h2>
                <div className="abouticon">
                    <p className="iconName">Academic Calendar</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">Emergency Alert Sign Up</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">News and Events</p>
                </div> 
                <div className="abouticon">
                    <p className="iconName">Maps and Tours</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">Consumer Information</p>
                </div>
            </div>
            <div className="footerRight">
                <h2 style={{fontSize:"20px"}}>OUR SERVICES</h2>
                <div className="abouticon">
                    <p className="iconName">Cloud Computing</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">Machine Learning</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">Big Data</p>
                </div> 
                <div className="abouticon">
                    <p className="iconName">Web Applications</p>
                </div>
                <div className="abouticon">
                    <p className="iconName">Graphic Design</p>
                </div>
            </div>
        </div>
        </>
    )
}