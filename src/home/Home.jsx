import './Home.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar';
import ByName from "../components/pages/ByName";
import ByEntry from "../components/pages/ByEntry";
import HomePage from '../components/pages/HomePage';

export default function Home() {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/byname' element={<ByName/>} />
            <Route path='/byentry' element={<ByEntry/>} />
          </Routes>
        </Router>
      );
}

