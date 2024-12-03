import {React} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './bike.jsx';
import BikeRentalInterface from './bike.jsx';

import './app.jsx';
import BicycleRentingApp from './app.jsx';


const App = () => {
   
    return (
      <Router>
        <Routes>
          <Route path="/" element={<BicycleRentingApp/>} />
          <Route path="/bike" element={<BikeRentalInterface/>} />
        </Routes>
      </Router>
    );
  
}

export default App