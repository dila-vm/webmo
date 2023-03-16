import {lazy} from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
    {
        path: '/home',
        component: lazy(() => import('../../views/dashboard/Home'))
    },
    {
        path: '/manage-users',
        component: lazy(() => import('../../views/manage Users/ManageUsers')),
    }, {
        path: '/add-users',
        component: lazy(() => import('../../views/manage Users/addUsers/AddUsers')),
    }, {
        path: '/manage-users-roles',
        component: lazy(() => import('../../views/user role/UserRoles')),
    },  {
        path: '/manage-packages',
        component: lazy(() => import('../../views/packages/Packages')),
    },  {
        path: '/manage-permission',
        component: lazy(() => import('../../views/permissions/Permissions')),
    },  {
        path: '/manage-subscriptions',
        component: lazy(() => import('../../views/subscriptions/Subscriptions')),
    }, {
        path: '/manage-Services',
        component: lazy(() => import('../../views/service managment/ServiceManagement')),
    }, {
        path: '/manage-items',
        component: lazy(() => import('../../views/item management/ItemManagement')),
    },{
        path: '/manage-settings',
        component: lazy(() => import('../../views/general setting/GenaralSettings')),
    },
    {
        path: '/login',
        component: lazy(() => import('../../views/auth/Login')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/error',
        component: lazy(() => import('../../views/Error')),
        layout: 'BlankLayout'
    }
]

export {DefaultRoute, TemplateTitle, Routes}
