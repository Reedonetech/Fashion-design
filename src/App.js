import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
// import Herobody from './Component/Herobody';
// import Herobody2 from './Component/Herobody2';
// import Herobody3 from './Component/Herobody3';
import AboutUs from './Component/AboutUs';
import Footer from './Component/Footer';
import Course from './Component/Course';
import Form from './Component/Form';
// import Service from './Component/Service';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Course />
      <Form />
      {/* <Service /> */}
      <Footer />
    </div>
  );
}

export default App;
