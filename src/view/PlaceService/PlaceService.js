import React from "react";
import Header from "../../components/Header/Header";
import {Button, ButtonGroup, Card, CardBody, Col, FormGroup, Input, Label, Row} from "reactstrap";
import {Step} from 'semantic-ui-react'
import './placeService.scss'

class PlaceService extends React.Component {

    state = {

        step: 1,
        oftenSelected: 0,
        preferred: []
    };

    changeStep = (number) => {
        this.setState({step: number})
    };

    setRSelected = (number) => {

        this.setState({oftenSelected: number})
    };

    // setPreferred = (number) => {
    //     this.setState({setPreferred: number})
    // };
    setPreferred = (selected) => {
        console.log(selected)
        let cSelected = this.state.preferred;
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        console.log(cSelected)
        this.setState({setPreferred: [cSelected]})
    };

    render() {
        let {step, oftenSelected, preferred} = this.state
        return <div className='placeService'>
            <Header/>
            <div className="container ">
                <Row className='step-wrapper'>
                    <Col sm={12} lg={12}>
                        <Step.Group ordered widths='4'>
                            <Step className={step > 1 ? 'completedStep' : ''} onClick={() => this.changeStep(1)}
                                  completed={step > 1}>
                                <Step.Content>
                                    <Step.Title>Step</Step.Title>

                                </Step.Content>
                            </Step>

                            <Step className={step > 2 ? 'completedStep' : ''} onClick={() => this.changeStep(2)}
                                  completed={step > 2}>
                                <Step.Content>
                                    <Step.Title>Step</Step.Title>

                                </Step.Content>
                            </Step>

                            <Step className={step > 3 ? 'completedStep' : ''} completed={step > 3}
                                  onClick={() => this.changeStep(3)}>
                                <Step.Content>
                                    <Step.Title>Step</Step.Title>
                                </Step.Content>
                            </Step>

                            <Step className={step > 4 ? 'completedStep' : ''} completed={step > 4}
                                  onClick={() => this.changeStep(4)}>
                                <Step.Content>
                                    <Step.Title>Step</Step.Title>
                                </Step.Content>
                            </Step>
                        </Step.Group>


                    </Col>
                </Row>

                <Row>
                    <Col sm={12} lg={12}>

                        {step === 1 ?
                            <div className="form-wrapper">

                                <Row>
                                    <Col sm={12} md={12} lg={10}>
                                        <h1>Where do you require cleaning?</h1>
                                    </Col>
                                    <Col sm={12} md={12} lg={4}>

                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="user name"
                                            type="text"
                                        />

                                        <Input
                                            id="address"
                                            name="address"
                                            placeholder="address"
                                            type="text"
                                        />

                                        <Input
                                            id="email"
                                            name="email"
                                            placeholder="email"
                                            type="email"
                                        />

                                        <Input
                                            id="mobile"
                                            name="mobile"
                                            placeholder="mobile number"
                                            type="number"
                                        />

                                    </Col>

                                    <Col sm={12} md={12} lg={10}>

                                        <Button onClick={() => this.changeStep(2)}
                                                className='btn-common'> Continue </Button>
                                    </Col>
                                </Row>

                            </div> :
                            step === 2 ?
                                <Row>
                                    <div className="form-wrapper">


                                        <div className="often">

                                            <Col sm={12} md={12} lg={12}>
                                                <h1>How often do you need our services?</h1>
                                            </Col>
                                            <Col sm={12} md={12} lg={8}>
                                                <Row>
                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            className=' btn-grp-section'
                                                            outline
                                                            onClick={() => this.setRSelected(1)}
                                                            className={oftenSelected === 1 ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Weekly
                                                        </Button>

                                                    </Col>
                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            className=' btn-grp-section'
                                                            outline
                                                            onClick={() => this.setRSelected(2)}
                                                            className={oftenSelected === 2 ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Every two weeks
                                                        </Button>
                                                    </Col>
                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setRSelected(3)}
                                                            className={oftenSelected === 3 ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Monthly
                                                        </Button>
                                                    </Col>

                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setRSelected(4)}
                                                            className={oftenSelected === 4 ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Daily
                                                        </Button>
                                                    </Col>

                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setRSelected(5)}
                                                            className={oftenSelected === 5 ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            One-off
                                                        </Button>
                                                    </Col>
                                                    <Col sm={12} md={3} lg={4}></Col>
                                                </Row>

                                            </Col>
                                        </div>

                                        <div className="often">

                                            <Col sm={12} md={12} lg={12}>
                                                <h1>How often do you need our services?</h1>
                                            </Col>
                                            <Col sm={12} md={12} lg={8}>
                                                <Row>
                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            className=' btn-grp-section'
                                                            outline
                                                            onClick={() => this.setPreferred(1)}
                                                            className={preferred.includes(1) ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Monday
                                                        </Button>

                                                    </Col>
                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            className=' btn-grp-section'
                                                            outline
                                                            onClick={() => this.setPreferred(2)}
                                                            className={preferred.includes(2) ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Tuesday
                                                        </Button>
                                                    </Col>
                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setPreferred(3)}
                                                            className={preferred.includes(3) ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Wednesday
                                                        </Button>
                                                    </Col>

                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setPreferred(4)}
                                                            className={preferred.includes(4) ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Thursday
                                                        </Button>
                                                    </Col>

                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setPreferred(5)}
                                                            className={preferred.includes(5) ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Friday
                                                        </Button>
                                                    </Col>

                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setPreferred(6)}
                                                            className={preferred.includes(6) ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Saturday
                                                        </Button>
                                                    </Col>

                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setPreferred(7)}
                                                            className={preferred.includes(7) ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Sunday
                                                        </Button>
                                                    </Col>

                                                    <Col sm={12} md={4} lg={4} className='btn-wrapper'>
                                                        <Button
                                                            outline
                                                            onClick={() => this.setPreferred(8)}
                                                            className={preferred.includes(8) ? 'btn-grp-section btn-common' : 'btn-grp-section'}
                                                        >
                                                            Flexible
                                                        </Button>
                                                    </Col>

                                                </Row>

                                            </Col>
                                        </div>

                                    </div>
                                </Row> :
                                null
                        }

                    </Col>
                </Row>

            </div>
        </div>
    }
}

export default PlaceService;