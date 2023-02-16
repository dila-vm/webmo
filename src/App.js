import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Layout from './container/Layout/Layout';
import FilterDetails from "./view/filterDetails/FilterDetails";
import {APPLY_ONLINE_APPLICATION_PATH, FILTER_PATH, PLACE_SERVICE_PATH} from "./constants/constant";
import 'react-toastify/dist/ReactToastify.css';
import {history} from './history'
import Landing from "./view/landing/Landing";
import PlaceService from "./view/PlaceService/PlaceService";
import OnlineApplication from "./view/onlineApplycation/OnlineApplication";

function App() {

    return (
        <div>
            <BrowserRouter history={history}>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path={FILTER_PATH}
                           element={<FilterDetails/>}/>

                    <Route path={PLACE_SERVICE_PATH}
                           element={<PlaceService/>}/>
     <Route path={APPLY_ONLINE_APPLICATION_PATH}
                           element={<OnlineApplication/>}/>

                </Routes>

            </BrowserRouter>
        </div>
    );
}


export default App;
