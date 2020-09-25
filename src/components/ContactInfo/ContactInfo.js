import React, { Component } from 'react'
import './ContactInfo.css'

export default class ContactInfo extends Component {
    render() {
        return (
            <div className="wrapper">
                <h2 className="contacts_head">Edit</h2>
                <form className="form">
                    <div>
                        <label htmlFor="">First name</label>
                        <input id="first-name" className="input first-name" type="text"/>
                    </div>
                    
                    <div>
                        <label htmlFor="">Last name</label>
                        <input id="last-name" className="input last-name" type="text"/>
                    </div>
                    
                    <div>
                        <label htmlFor="">Phone</label>
                        <input id="phone-number" className="input phone-number" type="tel"/>
                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input id="email" className="input email" type="email"/>
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
