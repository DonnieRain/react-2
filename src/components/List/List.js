import React, { Component } from 'react'
import './List.css'

export default class Contacts extends Component {

    render() {
        return (
            <div className="contacts">
                <div className="contacts_list" >
                    {this.props.list.map(item => {
                        return (
                            <div className="contacts_item" key={item.id} onClick={() => this.props.onSelect(item)}>
                                <p className="contact">{item.name}</p>
                                <p className="contact">{item.lastname}</p>
                                <p className="contact">{item.phone}</p>
                                <p className="contact">{item.mail}</p>
                            </div>
                        )
                    })}
                </div>
                <div onClick={this.props.addContact} className="add">Add</div>
            </div>
        )
    }
}
