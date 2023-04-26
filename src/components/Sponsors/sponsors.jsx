import "../Sponsors/sponsors.css"
import Marquee from "react-fast-marquee";
import usbank from "../../assets/usbank.jpg";
import { SponsorImage } from "../sponsorImage";
import nodway from "../../assets/nodway.png"
import microsoft from "../../assets/microsoft.png"
import google from "../../assets/google.png"
import att from "../../assets/att.png"
import mosaic from "../../assets/mosaic.jpg";
import mozingo from "../../assets/mozingo.jpg";

export const Sponsors = ()=>{
    return(
        <>
        <div className="sponsors">
            <div className="sponsorsInfo">
            <h2 className="sponsorsTitle">Our Sponsors</h2>
            <div className="hoverBorder"></div>
            </div>
            <div className="sponsorImages" style={{marginTop:"40px"}}>
            <Marquee>
                <SponsorImage image={usbank}/>
                <SponsorImage image={nodway}/>
                <SponsorImage image={microsoft}/>
                <SponsorImage image={google}/>
                <SponsorImage image={att}/>
                <SponsorImage image={mosaic}/>
                <SponsorImage image={mozingo}/>


            </Marquee>
            </div>
            </div>
        </>
    )
}