import {Mail, Home, Users,PlusCircle} from 'react-feather'
import React from "react"


export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'users',
    title: 'Users',
    icon: <Users size={20} />,
    navLink: '/manage-users',
    children:[
      {
        id: 'users',
        title: 'View Users',
        icon: <Users size={20} />,
        navLink: '/manage-users'
      },  {
        id: 'users',
        title: 'Add Users',
        icon: <PlusCircle size={20} />,
        navLink: '/add-users'
      },
    ]
  },
  {
    id: 'packages',
    title: 'Manage Packages',
    icon: <Users size={20} />,
    navLink: '/manage-packages'
  }
]
