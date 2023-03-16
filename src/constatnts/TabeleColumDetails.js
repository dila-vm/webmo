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
];

export const userRoleDetailsColumns = [
    {
        name: 'User Role Id',
        selector: 'id',
        key: 'id',
        maxWidth: '100px'
    }, {
        name: 'User Role',
        selector: 'userRole',
        key: 'userRole'
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
];

export const packageDetailsColumns = [
    {
        name: 'Package Id',
        selector: 'id',
        key: 'id',
        maxWidth: '100px'
    }, {
        name: 'Package Name',
        selector: 'packageName',
        key: 'packageName'
    }, {
        name: 'Price',
        selector: 'price',
        key: 'price'
    }, {
        name: 'Discount',
        selector: 'discount',
        key: 'discount'
    }, {
        name: 'type',
        selector: 'type',
        key: 'type'
    }, {
        name: 'Subscription Count',
        selector: 'count',
        key: 'count',
        cell: row => (
            <Badge
                color='primary' pill>
                {
                    row.count
                }
            </Badge>
        )
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
];

export const subscriptionDetailsColumns = [
    {
        name: 'Id',
        selector: 'id',
        key: 'id',
        maxWidth: '100px'
    }, {
        name: 'Subscriber',
        selector: 'subscriber',
        key: 'subscriber'
    }, {
        name: 'Package Name',
        selector: 'packageName',
        key: 'packageName'
    }, {
        name: 'type',
        selector: 'type',
        key: 'type'
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
];


export const serviceDetailsColumns = [
    {
        name: 'Id',
        selector: 'id',
        key: 'id',
        maxWidth: '100px'
    }, {
        name: 'Service Name',
        selector: 'serviceName',
        key: 'serviceName'
    }, {
        name: 'Items',
        selector: 'items',
        key: 'items'
    }, {
        name: 'Question count',
        selector: 'qCount',
        key: 'qCount'
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
];