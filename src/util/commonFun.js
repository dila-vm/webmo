import React, {Fragment} from "react";
import {AlertTriangle, Check, X} from "react-feather";
import {Slide, toast} from "react-toastify"
import Avatar from "../components/avatar";

export const customToastMsg = (title, type, body) => {
    console.log('commoncommon')
    let msgType = "info"
    let assets = {
        color: "bg-info",
        icon: <AlertTriangle size={15}/>
    }

    if (type === 2) {
        msgType = "info"
        assets = {
            color: "bg-info",
            icon: <AlertTriangle size={15}/>
        }
    } else if (type === 0) {
        msgType = "error"
        assets = {
            color: "bg-danger",
            icon: <X size={15}/>
        }
    } else if (type === 1) {
        msgType = "success"
        assets = {
            color: "bg-success",
            icon: <Check size={15}/>
        }
    }


};

const ToastContent = ({title, body, assets}) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>

                <h6 className='toast-title fw-bolder custom-font-toast'>{title}</h6>
            </div>
        </div>
        {body && (
            <div className='toastify-body'>
                <span>{body}</span>
            </div>
        )}
    </Fragment>
)
