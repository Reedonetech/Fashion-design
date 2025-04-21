import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Enroll from './Component/Enroll';



function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/enroll" element={<Enroll />} />

      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
