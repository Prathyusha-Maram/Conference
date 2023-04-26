import Header from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Link } from 'react-router-dom';
import EventsComponent from '../components/EventsComponent/events';
import Carousel from '../components/Carousel/carousel';
import './style.css';

const Accept = () => {
    return (
        <div className="App">
       <Header/>
       <div className="about">
            <div className="aboutLeft">
            <h2 className="aboutTitle">Evaluated Papers</h2>
            <p className="aboutDescription" > 
            <ul className="myList">
            <li>
        <a href="https://airccse.org/journal/mlaij/index.html">
          Information Technology in Industry (ITII)
        </a>
        
      </li>
      <li>
        <a href="https://airccse.org/journal/mlaij/index.html">
          International Journal on Information Theory (IJIT)
        </a>
      </li></ul>
            </p>
            </div>
        </div>
       <Footer/>
      </div>
    );
    };
    
    export default Accept;