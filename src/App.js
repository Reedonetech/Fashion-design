import './App.css';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Herobody from './Component/Herobody';
import Herobody2 from './Component/Herobody2';
import Herobody3 from './Component/Herobody3';
import AboutUs from './Component/AboutUs';
import Footer from './Component/Footer';
import Course from './Component/Course';
import ContactUs from './Component/ContactUs';
import Service from './Component/Service';
import Eroll from './Component/Eroll'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Course />
    
      <ContactUs />
      
      <Service />
      <Eroll />
      <Footer />
    </div>
  );
}

export default App;
