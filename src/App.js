import React, { Component } from 'react'
import './App.css'
import Contacts from './components/Contacts/Contacts'
import ContactInfo from './components/ContactInfo/ContactInfo'

export default class App extends Component {
  state = {
    listItem: [],
    focusContact: [
      {
        name: ''
      }
    ]
  }

  editContact = (id) => {  
    this.state.listItem.map(item => {
      if(item.id == id) {
        this.setState({
          focusContact: [...this.state.focusContact, item]
        })
      }
    })
  }

  addContact = (list) => {
    list.id = Date.now();

    this.setState({
      listItem: [...this.state.listItem, list]
    })

  }

  render() {
    return (
      <div className="app">
        <Contacts list={this.state.listItem} edit={this.editContact}/>
        <ContactInfo list={this.state.listItem} onSubmit={this.addContact} focus={this.state.focusContact}/>
      </div>
    )
  }
}
