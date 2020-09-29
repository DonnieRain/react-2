import React, { Component } from 'react'
import './Contacts.css'

export default class Contacts extends Component {

    

    render() {
        return (
            <div className="contacts">
                <div className="contacts_list" >
                    <h2 className="contacts_head">Contacts</h2>

                    {this.props.list.map(item => {
                        return (
                            <div className="contacts_item" key={item.id} onClick={() => this.props.edit(item.id)}>
                                <p className="contact">{item.name}</p>
                                <p className="contact">{item.lastname}</p>
                                <p className="contact">{item.phone}</p>
                                <p className="contact">{item.mail}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="add">Add</div>
            </div>
        )
    }
}
