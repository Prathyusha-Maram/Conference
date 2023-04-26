import "../EventCard/eventCard.css"
import cloudcomputing from "../../assets/cloudcomputing.png"
export const EventCard = ({image,title})=>{
    return(
        <>
        <div className="eventCard" style={{backgroundImage:` url(${image})`}}>
        <div className="eventsInfo">
        <h3 className="eventTitle">{title}</h3>
        <div className="exploreBtn">
            <a href="#" className="exploreMoreLink">Explore More</a>
        </div>
        </div>
        </div>
        </>
    )
}