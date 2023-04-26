import "../Speaker/speaker.css"
import { Facebook,Linkedin,Mail } from "react-feather";
export const Speaker = ({image,name,occ})=>{
    return(
        <>
        <div className="speaker">
            <img src={image} alt="Speaker image" className="speakerImage" />
            <h5 className="speakerName">{name}</h5>
            <p className="speakerDescription">{occ}</p>
            <div className="icons">
            <Facebook size={25} color={'#006747'} className="icon"/>
            <Linkedin size={25} color={'#006747'} className="icon"/>
            <Mail size={25} color={'#006747'} className="icon"/>
            </div>
        </div>
        </>
    )
}