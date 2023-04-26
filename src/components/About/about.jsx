import about from "../../assets/about.png"
import "../About/about.css"
import CountUp from 'react-countup';

const About = ()=>{
    const textStyle = { color: 'red' };
    return(
        <>
        <div className="about">
            <div className="aboutLeft">
            <h2 className="aboutTitle">About the Conference</h2>
            <p className="aboutDescription"> Northwest conference (ConfNW2023) will provide an excellent international forum for sharing knowledge and results in theory, methodology and applications of Natural Language Computing and its advances.</p>
            <p className="aboutDescription">Authors are solicited to contribute to the conference by submitting articles that illustrate research results, projects, surveying works and industrial experiences that describe significant advances in ConfNW2023.</p>
            <p className="aboutDescription" style={textStyle}>Conference on October 12, 2023</p>
            <div className="btn knowMore">
                <a href="#" className="knowMoreLink">KNOW MORE</a>
                
            </div>
            </div>
        </div>

        <div className="about">
            <div className="aboutLeft">
            <h2 className="aboutTitle">Paper Submission</h2>
            <p className="aboutDescription"> Authors are invited to submit papers through the conference  <span style={{ color: "red" }}>Paper Submission</span> by August 20, 2023. Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference. The proceedings of the conference will be published by Conference Proceedings in Northwest Missouri State University(confNW2023) .</p>
            <p className="aboutDescription">Selected papers from  ConfNW2023, after further revisions, will be published in the special issue of the following journals.</p>
            <p className="aboutDescription" > 
            <ul>
                <li>International Journal on Natural Language Computing (IJNLC)</li>
                <li>International Journal of Web & Semantic Technology (IJWesT)</li>
                <li>Machine Learning and Applications: An International Journal (MLAIJ)</li>
                <li>Information Technology in Industry (ITII)</li>
                <li>International Journal on Information Theory (IJIT)</li>
             </ul>
            </p>
            <div className="btn knowMore">
                <a href="#" className="knowMoreLink">KNOW MORE</a>
                
            </div>
            </div>
        </div>
        <div className="about">
            <div className="aboutLeft">
            <h2 className="aboutTitle">Important Dates</h2>
            <p className="aboutDescription">Paper Submission Deadline: <span style={{ color: "red" }}>August 20, 2023</span></p>
            <p className="aboutDescription">Authors Notification:  <span style={{ color: "red" }}>Septembert 5, 2023</span></p>
            <p className="aboutDescription">Accept/Reject Paper: <span style={{ color: "red" }}>September 24, 2023</span><div className=""></div></p>
            <p className="aboutDescription" style={textStyle}>Conference on October 12 , 2023</p>
            <div className="btn knowMore">
                <a href="#" className="knowMoreLink">KNOW MORE</a>
                
            </div>
           
            </div>
        </div>
        <div className="about">
            <div className="aboutLeft">
            <h2 className="aboutTitle">Conference Proceedings</h2>
            <p className="aboutDescription"> Hard copy of the proceedings will be distributed during the Conference. The softcopy will be available on <span style={{ color: "red" }}>B.D. Owens Library</span>.</p>
            <div className="btn knowMore">
                <a href="#" className="knowMoreLink">KNOW MORE</a>
                
            </div>
            </div>
        </div>
        
        </>
    )
}

export default About;