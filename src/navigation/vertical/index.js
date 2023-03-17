import {Mail, Home, Users, PlusCircle, Package, Key, Award, Book, FileText, Settings, Minimize} from 'react-feather'
import React from "react"
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";


export default [
    {
        id: 'home',
        title: 'Home',
        icon: <Home size={20}/>,
        navLink: '/home'
    },
    {
        id: 'users',
        title: 'Users',
        icon: <Users size={20}/>,
        navLink: '/manage-users',
        children: [
            {
                id: 'users',
                title: 'View Users',
                icon: <Users size={20}/>,
                navLink: '/manage-users'
            }, {
                id: 'users',
                title: 'Add Users',
                icon: <PlusCircle size={20}/>,
                navLink: '/add-users'
            },
        ]
    }, {
        id: 'users_role',
        title: 'Users Role',
        icon: <Award size={20}/>,
        navLink: '/manage-users-roles'
    },
    {
        id: 'packages',
        title: 'Packages',
        icon: <Package size={20}/>,

        children: [
            {
                id: 'view_packages',
                title: 'View Packages',
                icon: <Package size={20}/>,
                navLink: '/manage-packages'
            }, {
                id: 'add_packages',
                title: 'Add Packages',
                icon: <PlusCircle size={20}/>,
                navLink: '/add-packages'
            },
        ]
    }, {
        id: 'Permission',
        title: 'Permission',
        icon: <Key size={20}/>,

        children: [
            {
                id: 'view_permission',
                title: 'View Permission',
                icon: <Key size={20}/>,
                navLink: '/manage-permission'
            }, {
                id: 'add_permission',
                title: 'Add Permission',
                icon: <PlusCircle size={20}/>,
                navLink: '/add-permission'
            },
        ]
    }, {
        id: 'Subscriptions',
        title: 'Subscriptions',
        icon: <Book size={20}/>,
        navLink: '/manage-subscriptions'
    }, {
        id: 'service_management',
        title: 'Service Management',
        icon: <FileText size={20}/>,

        children: [
            {
                id: 'view_services',
                title: 'View Services',
                icon: <FileText size={20}/>,
                navLink: '/manage-Services'
            }, {
                id: 'add_services',
                title: 'Add Services',
                icon: <PlusCircle size={20}/>,
                navLink: '/add-services'
            },
        ]
    }, {
        id: 'item_management',
        title: 'Item Management',
        icon: <Minimize size={20}/>,

        children: [
            {
                id: 'view_item',
                title: 'View Items',
                icon: <Minimize size={20}/>,
                navLink: '/manage-items'
            }, {
                id: 'add_services',
                title: 'Add Item',
                icon: <PlusCircle size={20}/>,
                navLink: '/add-item'
            },
        ]
    }, {
        id: 'general_setting ',
        title: 'General Settings',
        icon: <Settings size={20}/>,
        navLink: '/manage-settings'
    }
]
