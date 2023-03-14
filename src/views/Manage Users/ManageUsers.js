import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink} from 'reactstrap'
import React from "react"
import {Col, Divider, Input, Row, Select, Form} from "antd"

const ManageUsers = () => {
    return (
        <Card>

            <CardHeader>
                <h1>Manage Users</h1>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col span={8}>
                        <Form.Item
                            name={`field-`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!'
                                }
                            ]}
                        >
                            <Input placeholder="placeholder" />

                        </Form.Item>
                    </Col>
                </Row>

            </CardBody>
        </Card>
    )
}

export default ManageUsers
