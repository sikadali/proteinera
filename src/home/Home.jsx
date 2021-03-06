import './Home.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar';
import ByName from "../components/pages/ByName";
import ByEntry from "../components/pages/ByEntry";
import Statistics from "../components/pages/Statistics";
import HomePage from '../components/pages/HomePage';
import StoreProvider from '../utils/StoreProvider'

export default function Home() {
    return (
      <StoreProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/byname' element={<ByName/>} />
            <Route path='/byentry' element={<ByEntry/>} />
            <Route path='/statistics' element={<Statistics/>} />
          </Routes>
        </Router>
      </StoreProvider>
    );
}

