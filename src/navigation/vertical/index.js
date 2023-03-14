import {Mail, Home, Users} from 'react-feather'
import React from "react"

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Manage Users',
    icon: <Users size={20} />,
    navLink: '/manage-users'
  },
  {
    id: 'packages',
    title: 'Manage Packages',
    icon: <Users size={20} />,
    navLink: '/manage-packages'
  }
]
