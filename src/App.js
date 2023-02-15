import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Layout from './container/Layout/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route  path='' element={<Layout/>} />
              <Route path='/about'
                     element={<About />}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}
const About = () => {
    return <div>
        Dilanajana About
    </div>
};


export default App;
