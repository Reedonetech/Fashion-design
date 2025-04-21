import AboutUs from "../Component/AboutUs";
import Course from "../Component/Course";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Form from '../Component/Form';
import Footer from '../Component/Footer';


function Home(){
    return(
        <>
              <Navbar />
              <Hero />
              <AboutUs />
              <Course />
              <Form />
              <Footer />
        </>
    )
}

export default Home;