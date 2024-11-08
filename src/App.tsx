import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './interface/page/Header';
import { Homepage } from './interface/page/Homepage';
import { BuyCar } from './interface/page/BuyCard';



function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/buy" element={<BuyCar />} />
      
      </Routes>
    </Router>
  );
}

export default App;