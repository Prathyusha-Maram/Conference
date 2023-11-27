import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import events from "../../../images/events.jpg";
import headerBox from "../../../images/headerBox.jpg";
import headerBox2 from "../../../images/headerBox2.jpg";
const corosal = () => {
    return (
        <div>        
            <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    height={600}
                    src={headerBox}
                    alt=" "
                />
                <Carousel.Caption>
                    <h3>Welcome to NWConf2023</h3>
                    <h6>Submission Deadlines <span style={{ color: "red" }}> August 20, 2023</span></h6>
                    <h6>Conference Dates <span style={{ color: "red" }}> October 12, 2023</span></h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    height={600}
                    src={events}
                    alt=" "
                />
                <Carousel.Caption>
                    <h3>Register for an event</h3>
                    <p>Click <a href="/Login">here</a> to register</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    height={600}
                    src={headerBox2}
                    alt=" "
                />
                <Carousel.Caption>
                    <h3>Check out the deadlines</h3>

                    {/* <p>Click <link href="#">here</link> to know the deadlines</p> */}
                    <button
                        type="button"
                        onClick={() => {
                        // Handle your click logic here
                        // For example, show deadlines or trigger some other functionality
                        console.log('Clicked! Show deadlines or trigger other functionality.');
                    }}
                    >
                        Click here to know the deadlines
                    </button>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></div>
    )
}

export default corosal