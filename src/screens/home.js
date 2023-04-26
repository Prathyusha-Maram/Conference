//import '/App.css';
import Header from '../components/Header/header';
//import Landing from './components/Landing/landing';
import Carousel from '../components/Carousel/carousel';
import About from '../components/About/about';
import Events from '../components/EventsComponent/events';
import { Speakers } from '../components/Speakers/speakers';
import { Sponsors } from '../components/Sponsors/sponsors';
import { Footer } from '../components/Footer/footer';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700;900&display=swap');
</style>
const Home = () => {
    return (
      <div className="App">
       <Header/>
       <Carousel/>
       <About/>
       <Events/>
       <Speakers/>
       <Sponsors/>
       <Footer/>
      </div>
    );
  };

export default Home;