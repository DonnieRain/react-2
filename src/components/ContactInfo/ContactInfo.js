import React, { Component } from 'react'
import './ContactInfo.css'

export default class ContactInfo extends Component {
    render() {
        return (
            <div className="wrapper">
                <form className="form">
                    <input className="input first-name" type="text"/>

                    <input className="input last-name" type="text"/>

                    <input className="input phone-number" type="tel"/>

                    <input className="input email" type="email"/>

                    <div className="btn save">
                        <button className="btn save">Save</button>
                        <button className="btn delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}
