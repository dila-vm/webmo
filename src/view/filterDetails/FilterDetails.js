import React from "react";
import Header from "../../components/Header/Header";
import axios from 'axios';
import {BASE_URL} from "../../service/ApiConfig";


class FilterDetails extends React.Component {

    componentDidMount() {
        let data={
            first_name:'Harshadeva',email:'dila@gmail.com',password:'11111111',password_confirmation:'11111111'
        };

    }

    render() {

        return <div>
            <Header/>

        </div>
    }
}

export default FilterDetails;