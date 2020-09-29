import React, { Component } from 'react'
import './ContactInfo.css'

export default class ContactInfo extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        mail: '',
    }

    handleInputChange = (e) => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            name: this.state.firstName,
            lastname: this.state.lastName,
            phone: this.state.phoneNumber,
            mail: this.state.mail
        })
    }

    render() { 
        return (
            <div className="wrapper">
                <h2 className="contacts_head">Edit</h2>
                <form className="form" onSubmit={this.onFormSubmit}>
                    <div>
                        <label htmlFor="">First name</label>
                        <input 
                            id="first-name" 
                            className="input first-name" 
                            type="text" 
                            name="firstName"
                            value={this.props.focus ? this.props.focus[0].name : ''} 
                            onChange={this.handleInputChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="">Last name</label>
                        <input 
                            id="last-name" 
                            className="input last-name" 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName} 
                            onChange={this.handleInputChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="">Phone</label>
                        <input 
                            id="phone-number" 
                            className="input phone-number" 
                            type="tel" 
                            name="phoneNumber"
                            value={this.state.phoneNumber} 
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input 
                            id="email" 
                            className="input email" 
                            type="email" 
                            name="mail"
                            value={this.state.mail} 
                            onChange={this.handleInputChange}
                                />
                    </div>

                    <div className="btn-block">
                        <button className="btn save">Save</button>
                        <button className="btn delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}
