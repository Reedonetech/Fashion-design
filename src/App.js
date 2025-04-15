import './App.css';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Herobody from './Component/Herobody';
import Herobody2 from './Component/Herobody2';
import Herobody3 from './Component/Herobody3';
import Herobody4 from './Component/Herobody4';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Herobody />
      <Herobody2 />
      <Herobody3 />
      <Herobody4/>
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
