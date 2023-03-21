import React from "react"
import './serviceselector.scss';


class ServiceSelector extends React.Component {

    state = {
        img: '',
        name: '',
        isChecked: ''
    }

    componentDidMount() {
        this.setState({
            img: this.props.img,
            name: this.props.name,
            isChecked: this.props.isChecked
        })
    }

    toggleCheckbox = () => {

        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.getSelectedCategories(this.props.item)

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

        const styles = {
            container: {
                backgroundImage: `url(${this.state.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            },
        };
        return (
            <div onClick={this.toggleCheckbox}
                 className="mr-1 interest-box d-flex justify-content-center align-items-center  "
                 style={styles.container}
            >


                <div
                    className='interest-check position-relative form-check form-check-primary'>
                    {
                        this.state.isChecked ?
                            <input onClick={this.toggleCheckbox} className=" interest-check-box" type='checkbox'
                                   id='primary-checkbox' defaultChecked/> :
                            <input onClick={this.toggleCheckbox} className=" interest-check-box" type='checkbox'
                                   id='primary-checkbox'/>
                    }
                    <span className="interest-text position-absolute">{this.state.name}</span>
                </div>

            </div>
        )
    }
}

export default ServiceSelector;