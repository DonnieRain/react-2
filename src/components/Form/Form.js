import React, { Component } from 'react'
import './Form.css'

export default class ContactInfo extends Component {

    handleInputChange = (e) => {
        this.props.onChange({
            ...this.props.item,
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <h2 className="contacts_head">Edit</h2>
                <form className="form" onSubmit={(e) => { this.props.onSubmit(e) }}>
                    <div>
                        <label htmlFor="">First name</label>
                        <input
                            id="first-name"
                            className="input first-name"
                            type="text"
                            name="name"
                            value={this.props.item.name}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Last name</label>
                        <input
                            id="last-name"
                            className="input last-name"
                            type="text"
                            name="lastname"
                            value={this.props.item.lastname}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Phone</label>
                        <input
                            id="phone-number"
                            className="input phone-number"
                            type="tel"
                            name="phone"
                            value={this.props.item.phone}
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
                            value={this.props.item.mail}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="btn-block">
                        <button className="btn save">Save</button>
                        {this.props.item.id
                            ? <button onClick={((e) => this.props.onRemove(e, this.props.item))} className="btn delete">Delete</button>
                            : null
                        }
                    </div>
                </form>
            </div>
        )
    }
}
