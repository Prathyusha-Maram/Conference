// import { CCarousel,CCarouselItem,CImage,CCarouselCaption } from '@coreui/react'
import headerBox from "../../assets/headerBox.jpg"
import headerBox2 from "../../assets/headerBox2.jpg"
import events from "../../assets/events.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const CarouselComponent = ()=>{
    return(
        <>
        <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            height={400}
            src={headerBox}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Welcome to Northwest Conference 2023</h3>
            <h6>Submission Deadlines <span style={{ color: "red" }}> August 20, 2023</span></h6>
            <h6>Conference Dates <span style={{ color: "red" }}> October 12, 2023</span></h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            height={400}
            src={events}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Register for an event</h3>
            <p>Click <a href="#">here</a> to register</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            height={400}
            src={headerBox2}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Check out the deadlines</h3>
            
            <p>Click <a href="#">here</a> to know the deadlines</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </>
    )
}

export default CarouselComponent;