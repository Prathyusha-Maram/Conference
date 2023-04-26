import { EventCard } from "../EventCard/eventCard";
import "../EventsComponent/events.css";
import cloudcomputing from "../../assets/cloudcomputing.png"
import blockchain from "../../assets/blockchain.jpg"
import bigdata from "../../assets/bigdata.jpg"
import crypto from "../../assets/cyrptography.jpg"
import software from "../../assets/software.jpg"
import ml from "../../assets/machinelearning.png"
import analytics from "../../assets/analytics.jpg"
import cyber from "../../assets/cyber.jpg"

const Events = ()=>{
    return(
        <>
        <div className="events">
            <h2 className="eventsTitle">Courses</h2>
            <div className="hoverBorder"></div>
        </div>
        <div className="eventCards">
        <EventCard image={cloudcomputing} title={"Cloud computing"} />
        <EventCard image={blockchain} title={"Block Chain"} />
        <EventCard image={bigdata} title={"Big Data"} />
        <EventCard image={crypto} title={"Cryptography"} />
        <EventCard image={software} title={"Software Engineering"} />
        <EventCard image={ml} title={"Machine Learning"} />
        <EventCard image={analytics} title={"Data Analytics"} />
        <EventCard image={cyber} title={"Cyber Security"} />
        
        </div>
        </>
    )
}

export default Events;