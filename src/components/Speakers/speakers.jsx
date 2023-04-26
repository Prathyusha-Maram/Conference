
import { Speaker } from "../Speaker/speaker"
import "../Speakers/speakers.css"
import pf1 from "../../assets/pf1.jpg"
import pf2 from "../../assets/pf2.jpg"
import pf3 from "../../assets/pf3.jpg"
import pf4 from "../../assets/pf4.jpg"
import pf5 from "../../assets/pf5.jpg"
import pf6 from "../../assets/pf6.jpg"
import pf7 from "../../assets/pf7.jpg"
import speaker from "../../assets/speaker.jpg"

export const Speakers = ()=>{
    return (
        <>
        <div className="speakers">
            <div className="speakersInfo">
            <h2 className="speakersTitle">committee Members</h2>
            <div className="hoverBorder"></div>
            </div>
            <div className="speakerCards">
                <Speaker image={pf1} name={"Derik"} occ={"CEO, XYZ"}/>
                <Speaker image={pf2} name={"Jamal Hussain"} occ={"Managing Director, ABC"}/>
                <Speaker image={pf3} name={"Tessie"} occ={"Blockchain professor, JHG"}/>
                <Speaker image={pf4} name={"Jay shetty"} occ={"Cloud specialist, AWS"}/>
                <Speaker image={pf5} name={"Amanda "} occ={"Phd, Some university"}/>
                <Speaker image={pf6} name={"Bill Gates"} occ={"Associate professor, XYZ"}/>
                <Speaker image={pf7} name={"Brooke"} occ={"CEO, DEF"}/>
                <Speaker image={speaker} name={"Elon musk"} occ={"ML professor, FJH"}/>
                
            </div>
        </div>
        </>
    )
}