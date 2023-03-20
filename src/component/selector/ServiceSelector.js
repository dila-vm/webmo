import React from "react"
import './serviceselector.scss';


class ServiceSelector extends React.Component {

    state = {
        img:'',
        name:'',
        isChecked:''
    }

    componentDidMount() {
        this.setState({
            img:this.props.img,
            name:this.props.name,
            isChecked:this.props.isChecked
        })
    }

    toggleCheckbox = (e) => {
        console.log(e.target.checked);
    if (e.target.checked){
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.getSelectedCategories(this.props.item)
    }
    }



    // handleChange({target}){
    //     if (target.checked){
    //         target.removeAttribute('checked');
    //         console.log('CHECKED')
    //     } else {
    //         target.setAttribute('checked', true);
    //         console.log('UNCHECKED')
    //     }
    // }

    render() {
        return (
            <div  className="mr-1 interest-box d-flex justify-content-center align-items-center bg-success">
                <img className="interest-img position-absolute" src={this.state.img} alt={""}/>

                <div className='interest-check position-relative form-check form-check-primary'>
                    {
                        this.state.isChecked ?  <input onClick={(e)=>this.toggleCheckbox(e)}className=" interest-check-box"  type='checkbox' id='primary-checkbox' defaultChecked/> :
                            <input onClick={(e)=>this.toggleCheckbox(e)}  className=" interest-check-box"  type='checkbox' id='primary-checkbox'/>
                    }

                </div>
                <span className="interest-text position-absolute">{this.state.name}</span>
            </div>
        )
    }
}

export default ServiceSelector;