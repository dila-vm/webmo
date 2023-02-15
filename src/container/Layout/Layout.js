import React from "react";
import {Route, Routes} from "react-router-dom";

import Landing from "../../view/landing/Landing";

class Layout extends React.Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<Landing/>}/>
            </Routes>
        );
    }
}


export default Layout;