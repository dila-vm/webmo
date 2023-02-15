import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Layout from './container/Layout/Layout';
import FilterDetails from "./view/filterDetails/FilterDetails";
import {FILTER_PATH} from "./constants/constant";
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<Layout/>}/>
                    <Route path={FILTER_PATH}
                           element={<FilterDetails/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}


export default App;
