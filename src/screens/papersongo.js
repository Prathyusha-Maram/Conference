import Header from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/carousel';

const papersongo = () => {
    return (
        <div className="App">
       <Header/>
       <div className="about">
            <div className="aboutLeft">
            <h2 className="aboutTitle">On Going Papers</h2>
            <p className="aboutDescription" > 
            <ul>
                <li><Link to="#">Information Technology in Industry (ITII)</Link></li>
                <li><Link to="#">International Journal on Information Theory (IJIT)</Link></li>
             </ul>
            </p>
            </div>
        </div>
       <Footer/>
      </div>
    );
    };
    
    export default papersongo;