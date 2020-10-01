import React, { Component } from 'react'
import './App.css'
import List from './components/List/List'
import Form from './components/Form/Form'
import Store from './Store'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.store = new Store('MyStore')
        this.state = {
            list: this.store.get('todos', []),
            editingItem: {
                id: null,
                name: '',
                lastname: '',
                phone: '',
                mail: ''
            }
        }

    }

    handleChangeItem = item => {
        this.setState({
            editingItem: item,
        });
    };

    handleSave = (e) => {
        e.preventDefault()
        this.store.set('todos', this.state.list)
        if (this.state.editingItem.id !== null) {
            this.setState(prev => ({
                list: prev.list.map(e => (
                    e.id === this.state.editingItem.id
                        ? this.state.editingItem
                        : e
                )),
            }));

            
        } else {
            this.store.set('todos', this.state.list)
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
        this.store.getRemove('todos', this.state.list, item)
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
