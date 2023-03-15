import {Badge} from "reactstrap";
import React from "react";
import {getUserStatus} from "../utility/CommonFun";

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
        key: 'email'
    },
    {
        name: 'STATUS',
        selector: 'status',
        minWidth: '10%',
        cell: row => (
            <Badge
                color={getUserStatus(row.status).color} pill>
                {
                    getUserStatus(row.status).text
                }
            </Badge>
        )
    }, {
        name: 'Action',
        selector: 'action',
        minWidth: '20%'
    }
]