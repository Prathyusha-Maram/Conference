import Header from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/carousel';
import './style.css';
export const Button = (props) => { 
    const { onClick, title } = props; 
    return ( 
    <button onClick={onClick}>{title}</button> 
    ); 
}

const evaluation = () => {
    return (

        <div className="App">
       <Header/>
       <div className="about">
            <div className="head" >
            <h2 className="aboutTitle">Papers need to be Evaluated</h2>
            <p className="aboutDescription" > 
            <div className="card-container">
  <a href="https://airccse.org/journal/ijnlc/index.html" className="card">
    <div className="card-body">
      <h5 className="card-title">International Journal on Natural Language Computing (IJNLC)</h5>
      <a href="https://airccse.org/journal/ijnlc/index.html" className="btn btn-success">Accept</a>
      <a href="#" className="btn btn-secondary">Reject</a>
    </div>
  </a>
  <a href="https://www.airccse.org/journal/ijwest/ijwest.html" className="card">
    <div className="card-body">
      <h5 className="card-title">International Journal of Web &amp; Semantic Technology (IJWesT)</h5>
      <a href="https://www.airccse.org/journal/ijwest/ijwest.html" className="btn btn-success">Accept</a>
      <a href="#" className="btn btn-secondary">Reject</a>
    </div>
  </a>
  <a href="https://airccse.org/journal/ijcsa/index.html" className="card">
    <div className="card-body">
      <h5 className="card-title">Machine Learning and Applications: An International Journal (MLAIJ)</h5>
      <a href="https://airccse.org/journal/ijcsa/index.html" className="btn btn-success">Accept</a>
      <a href="#" className="btn btn-secondary">Reject</a>
    </div>
  </a>
  <a href="https://airccse.org/journal/mlaij/index.html" className="card">
    <div className="card-body">
      <h5 className="card-title">Information Technology in Industry (ITII)</h5>
      <a href="https://airccse.org/journal/mlaij/index.html" className="btn btn-success">Accept</a>
      <a href="#" className="btn btn-secondary">Reject</a>
    </div>
  </a>
  <a href="https://airccse.org/journal/mlaij/index.html" className="card">
    <div className="card-body">
      <h5 className="card-title">International Journal on Information Theory (IJIT)</h5>
      <a href="https://airccse.org/journal/mlaij/index.html" className="btn btn-success">Accept</a>
      <a href="#" className="btn btn-secondary">Reject</a>
    </div>
    </a>
    </div>


            </p>
            </div>

        </div>
       <Footer/>
      </div>
    );
    };
    
    export default evaluation;