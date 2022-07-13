import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import Navigation from './components/Navigation';
import TasksList from './components/TasksList';
import Planeación from './components/Planeación';
import Corporativo from './components/Corporativo';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
          <Route path="/" exact element={<Planeación/>}/>
          <Route path="/Corporativo" element={<Corporativo/>}/>
          <Route path="/edit/:id" element={<CreateNote/>}/>
          <Route path="/Reporte" element={<CreateNote/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;
