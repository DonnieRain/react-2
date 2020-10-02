import React, { Component } from 'react'
import './App.css'
import List from './components/List/List'
import Form from './components/Form/Form'
import contactsSevice from './contact-service'

export default class App extends Component {
    state = {
        list: [],
        editingItem: this.clearForm()
    }

    handleChangeItem = item => {
        this.setState({
            editingItem: item,
        });
    };

    clearForm() {
        return {
            id: null,
            name: '',
            lastname: '',
            phone: '',
            mail: ''
        }
    }

    handleUpdateContacts = (contact, editContact) => {
        contactsSevice.put('/' + contact.id, editContact).then(({ data }) => {
            this.setState(prev => ({
                list: prev.list.map(e => e.id === data.id ? data : e),
            }));
        })
    }

    handleAddContacts = (newContact) => {
        contactsSevice.post('/', newContact).then(({ data }) => {
            this.setState(prev => ({
                list: [...prev.list, data]
            }));
        })
    }

    handleSave = (e) => {
        e.preventDefault()

        if (this.state.editingItem.id !== null) {
            const contact = this.state.list.find(item => item.id === this.state.editingItem.id)
            const editContact = { ...contact, ...this.state.editingItem }

            this.handleUpdateContacts(contact, editContact)

        } else {
            const newContact = { ...this.state.editingItem };

            this.handleAddContacts(newContact)
            this.setState({
                editingItem: this.clearForm()
            })
        }
    };

    addContact = () => {
        this.setState({
            editingItem: this.clearForm()
        })
    }

    onRemove = (e, item) => {
        e.preventDefault()

        contactsSevice.delete('/'+item.id).then(() => {
            console.log(this.state.list)
            this.setState({
                list: this.state.list.filter(e => e.id !== item.id),
                editingItem: this.clearForm()
            })
        })
    }

    componentDidMount() {
        contactsSevice.get('/').then(({ data }) => this.setState({
            list: data
        }))
    }

    render() {
        return (
            <div className="app">
                <List
                    list={this.state.list}
                    onSelect={this.handleChangeItem}
                    addContact={this.addContact}
                />
                <Form
                    item={this.state.editingItem}
                    onChange={this.handleChangeItem}
                    onSubmit={this.handleSave}
                    onRemove={this.onRemove}
                />
            </div>
        )
    }
}
