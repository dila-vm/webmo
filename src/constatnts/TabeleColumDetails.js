import {Badge} from "reactstrap";
import React from "react";

export const userDetailsColumns = [
    {
        name: 'First Name',
        selector: 'firstName',
        key: 'firstName'
    },
    {
        name: 'Last Name',
        selector: 'lastName',
        key: 'lastName'
    },
    {
        name: 'User Role',
        selector: 'userRole',
        key: 'userRole'
    },
    {
        name: 'Email',
        selector: 'email',
        key: 'userRole'
    },
    {
        name: 'Status',
        selector: 'status',
        cell: row=>(
            <Badge color="success" pill>Active</Badge>
        )
    }, {
        name: 'Action',
        selector: 'action',
        minWidth:'20%'
    }
]