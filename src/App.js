import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Enroll from './Component/Eroll';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element ={<Home />} />
            <Route path='/training' element ={<Enroll />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
