import React from "react"
import {Avatar, Card, Col, Row, Space} from "antd"
import './Dashboard.scss'
import {User, Compass, UserX, Briefcase} from 'react-feather'
import {UserOutlined} from '@ant-design/icons'

class Home extends React.Component {

    state = {
        cardDetails: [
            {label: "Activated Users", count: 50},
            {label: "Activated Companies", count: 50},
            {label: "Deactivated Users", count: 50},
            {label: "Deactivated Companies", count: 50}
        ]
    };

    render() {
        const {cardDetails} = this.state
        console.log(cardDetails)
        return (
            <div className='dashboard'>
                <Row>
                    <Col className='px-1 pb-md-1' xs={{span: 24}} md={{span: 12}}
                         lg={{span: 12}} xl={{span: 12}}>
                        <Card className=' dash-card w-100'>
                            <Row>
                                <Col span={22}>
                                    <h5>Active Users</h5>
                                    <h4>50</h4>
                                </Col>

                                <Col span={2}>
                                    <div
                                        style={{
                                            backgroundColor: 'rgba(40, 199, 111, 0.12)',
                                            padding: '0.5rem',
                                            borderRadius: '50%'
                                        }}
                                    >
                                        <User color='#28C76F' size={24}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>


                    <Col className='px-1 pb-md-1' xs={{span: 24}} md={{span: 12}}
                         lg={{span: 12}} xl={{span: 12}}>
                        <Card className=' dash-card w-100'>
                            <Row>
                                <Col span={22}>
                                    <h5>Deactivated Users</h5>
                                    <h4>05</h4>
                                </Col>

                                <Col span={2}>
                                    <div
                                        style={{
                                            backgroundColor: 'rgba(234,84,85,0.12)',
                                            padding: '0.5rem',
                                            borderRadius: '50%'
                                        }}
                                    >
                                        <UserX   color='#EA5455' size={24}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>


                    <Col className='px-1 pb-md-1' xs={{span: 24}} md={{span: 12}}
                         lg={{span: 12}} xl={{span: 12}}>
                        <Card className=' dash-card w-100'>
                            <Row>
                                <Col span={22}>
                                    <h5>Active Company</h5>
                                    <h4>150</h4>
                                </Col>

                                <Col span={2}>
                                    <div
                                        style={{
                                            backgroundColor: 'rgba(40, 199, 111, 0.12)',
                                            padding: '0.5rem',
                                            borderRadius: '50%'
                                        }}
                                    >
                                        <User color='#28C76F' size={24}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>


                    <Col className='px-1 pb-md-1' xs={{span: 24}} md={{span: 12}}
                         lg={{span: 12}} xl={{span: 12}}>
                        <Card className=' dash-card w-100'>
                            <Row>
                                <Col span={22}>
                                    <h5>Active Companies</h5>
                                    <h4>2</h4>
                                </Col>

                                <Col span={2}>
                                    <div
                                        style={{
                                            backgroundColor: 'rgba(234,84,85,0.12)',
                                            padding: '0.5rem',
                                            borderRadius: '50%'
                                        }}
                                    >
                                        <Briefcase color='#EA5455' size={24}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Home
