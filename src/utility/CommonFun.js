import {CheckCircle, Slash, Trash2} from "react-feather";

export const debounce = (func, delay) => {
    let debounceHandler;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceHandler);
        debounceHandler = setTimeout(() => func.apply(context, args), delay);
    };
};


export const isEmpty = (str) => {
    return (!str || str.length === 0)
}

export const getUserStatus = (type) => {
    let labelText
    if (!isEmpty(type)) {
        labelText = type.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())
    }
    switch (type) {
        case 'ACTIVE':
            return {
                color: 'light-success',
                text: 'Active',
                alertText: 'active',
                btnText: 'Block User',
                colorCode: '#EC681E',
                icon: <Slash style={{width: '16px', height: '16px', marginRight: '5px'}}/>,
                param: 'BLOCKED'
            }
        case 'INACTIVE':
            return {
                color:'light-secondary',
                text: 'Inactive',
                alertText: 'delete',
                btnText: 'Delete User',
                colorCode: '#8f8f8f' ,
                icon: <Trash2 style={{width: '16px', height: '16px', marginRight: '5px'}}/>,
                param: 'DELETED'
            }
        case 'BLOCKED':
            return {
                color: 'light-primary',
                text: labelText,
                alertText: 'block',
                btnText: 'Active User',
                colorCode: '#28C76F',
                icon: <CheckCircle style={{width: '16px', height: '16px', marginRight: '5px'}}/>,
                param: 'ACTIVE'
            }
        case 'DELETED':
            return {
                color: 'light-primary',
                text: labelText,
                alertText: 'delete',
                btnText: 'Delete User',
                colorCode: '#EC681E',
                icon: <Trash2 style={{width: '16px', height: '16px', marginRight: '5px'}}/>,
                param: 'DELETED'
            }
        default:
            return {
                color: '',
                text: '',
                alertText: '',
                btnText: '',
                colorCode: '',
                icon: '',
                param: ''
            }
    }
}