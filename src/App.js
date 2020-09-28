import React, { Component } from 'react'
import './App.css'
import Contacts from './components/Contacts/Contacts'
import ContactInfo from './components/ContactInfo/ContactInfo'

export default class App extends Component {
  state = {
    listItem: [
      {
        name: 'Alex',
        lastname: 'Fes',
        phone: '+380669429769',
        mail: 'qweqwe@gmail.com'
      }
    ]
  }

  render() {
    return (
      <div className="app">
        <Contacts list={this.state.listItem}/>
        <ContactInfo/>
      </div>
    )
  }
}
