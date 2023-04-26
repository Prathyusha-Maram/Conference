import "../Landing/landing.css";
import landingImage from "../../assets/headerImage.jpg";

const Landing = ()=>{
    return(
        <>
        <div className="landing">
        <img src={landingImage} alt="LandingImage" className="landingImage"/>
        <div className="landingBox">
            <h2 className="landingTitle"><span className="landingTItleSpan">Welcome to </span><span className="landingTItleSpan">Northwest conference</span><span className="landingTItleSpan"> 2023</span></h2>
        </div>
        </div>
        </>
    )
}

export default Landing;