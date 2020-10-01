import React, { Component } from 'react'
import './App.css'
import List from './components/List/List'
import Form from './components/Form/Form'

export default class App extends Component {
    state = {
        list: [],
        editingItem: {
            id: null,
            name: '',
            lastname: '',
            phone: '',
            mail: ''
        }
    }

    componentDidUpdate() {
        localStorage.getItem(this.state.editingItem.id)
    }

    handleChangeItem = item => {
        localStorage.setItem(this.state.editingItem.id, this.state.editingItem)
        this.setState({
            editingItem: item,
        });
    };

    handleSave = (e) => {
        e.preventDefault()
        if (this.state.editingItem.id !== null) {
            this.setState(prev => ({
                list: prev.list.map(e => (
                    e.id === this.state.editingItem.id
                        ? this.state.editingItem
                        : e
                )),
            }));
        } else {
            this.setState(prev => ({
                list: [...prev.list, {
                    ...this.state.editingItem,
                    id: Date.now(),
                }],
                editingItem: {
                    id: null,
                    name: '',
                    lastname: '',
                    phone: '',
                    mail: ''
                }
            }));
        }
    };

    addContact = () => {
        this.setState(()=> ({
            editingItem: {
                id: null,
                name: '',
                lastname: '',
                phone: '',
                mail: ''
            }
        }))
        localStorage.getItem(this.state.editingItem.id)
    }

    onRemove = (e,item) => {
        e.preventDefault()
        this.setState(prev => ({
            list: prev.list.filter(e => e.id !== item.id),
            editingItem: {
                id: null,
                name: '',
                lastname: '',
                phone: '',
                mail: ''
            }
        }));
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
