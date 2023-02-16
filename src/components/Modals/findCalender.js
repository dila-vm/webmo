import React from "react";
import {Button, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {FILTER_PATH} from "../../constants/constant";
import {Input} from "semantic-ui-react";
import './findCalender.scss'

class FindCalender extends React.Component {
    render() {
        return <div className='filter-wrapper'>
            <Col md={4}>
                <Input className='w-100' iconPosition='left' icon='search'
                       placeholder='Search...'/>
            </Col>
            <Col md={4}>
                <Input className='w-100' iconPosition='left' icon='calendar'
                       placeholder='Search...'/>
            </Col>
            <Col md={3}>
                <Button className='btn-common btn-calender'> <Link
                    style={{color: "white"}} to={FILTER_PATH}>
                    Find your calender
                </Link> </Button>
            </Col>
        </div>
    }
}

export default FindCalender;