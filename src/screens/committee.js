import Header from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import './style.css';

const Committee = () => {
    return (
        <div className="App">
       <Header/>
       <div className="about">
            <div className="head">
            <h2 className="aboutTitle">Program Committee Members</h2>
            <p className="aboutDescription" > 
            <ol>
      <li><b>Derik</b>, CEO, XYZ</li>
      <li><b>Jamal Hussain</b>, Managing Director, ABC</li>
      <li><b>Tessie</b>, Blockchain professor, JHG</li>
      <li><b>Jay shetty</b>, Cloud specialist, AWS</li>
      <li><b>Amanda</b>, Phd, Some university</li>
      <li><b>Bill Gates</b>, Associate professor, XYZ</li>
      <li><b>Brooke</b>, CEO, DEF</li>
      <li><b>Elon musk</b>, ML professor, FJH</li>
    </ol>
            </p>
            </div>
        </div>
       <Footer/>
      </div>
    );
    };
    
    export default Committee;