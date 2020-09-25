import React, { Component } from 'react'
import './App.css'
import Contacts from './components/Contacts/Contacts'
import ContactInfo from './components/ContactInfo/ContactInfo'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Contacts/>
        <ContactInfo/>
      </div>
    )
  }
}
