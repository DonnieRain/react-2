import React, { Component } from 'react'
import './ContactInfo.css'

export default class ContactInfo extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        mail: '',
    }

    handleInputChange = (e,input) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div className="wrapper">
                <h2 className="contacts_head">Edit</h2>
                <form className="form">
                    <div>
                        <label htmlFor="">First name</label>
                        <input 
                            id="first-name" 
                            className="input first-name" 
                            type="text" 
                            value={this.state.firstName} 
                            handleChange={this.onInputChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="">Last name</label>
                        <input 
                            id="last-name" 
                            className="input last-name" 
                            type="text" 
                            value={this.state.lastName} 
                            handleChange={this.onInputChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="">Phone</label>
                        <input 
                            id="phone-number" 
                            className="input phone-number" 
                            type="tel" 
                            value={this.state.phoneNumber} 
                            handleChange={this.onInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input 
                            id="email" 
                            className="input email" 
                            type="email" 
                            value={this.state.mail} 
                            handleChange={this.onInputChange}
                                />
                    </div>

                    <div className="btn save">
                        <button className="btn save">Save</button>
                        <button className="btn delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}
