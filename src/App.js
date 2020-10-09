import React, { useEffect, useState } from 'react'
import './App.css'
import List from './components/List/List'
import Form from './components/Form/Form'
import contactsSevice from './contact-service'


function App() {
    const [list, setList] = useState([])
    const [edit, setEdit] = useState({
        id: null,
        name: '',
        lastname: '',
        phone: '',
        mail: ''
    })

    useEffect(() => {
        contactsSevice.get('/')
            .then(({ data }) => { setList(data) })
    }, [])

    function clearForm() {
        return {
            id: null,
            name: '',
            lastname: '',
            phone: '',
            mail: ''
        }
    }

    function handleChangeItem(item) {
        console.log(list)
        setList(list.editingItem = item)
    };



    function handleUpdateContacts(contact, editContact) {
        contactsSevice.put('/' + contact.id, editContact).then(({ data }) => {
            setList(list.list = list.list.map(e => e.id === data.id ? data : e))
        })
    }

    function handleAddContacts(newContact) {
        contactsSevice.post('/', newContact).then(({ data }) => {
            setList(list.list = [...list.list, data])
        })
    }

    function handleSave(e) {
        e.preventDefault()

        if (list.editingItem.id !== null) {
            const contact = list.list.find(item => item.id === this.state.editingItem.id)
            const editContact = { ...contact, ...list.editingItem }

            handleUpdateContacts(contact, editContact)

        } else {
            const newContact = { ...list.editingItem };

            handleAddContacts(newContact)
            setList(list.editingItem = clearForm())
        }
    };

    function addContact() {
        setList(list.editingItem = clearForm())
    }

    function onRemove(e, item) {
        e.preventDefault()

        contactsSevice.delete('/' + item.id).then(() => {
            setList(
                list.list = list.list.filter(e => e.id !== item.id),
                list.editingItem = clearForm()
            )
        })
    }

    return (
        <div className="app">
            <List
                list={list}
                onSelect={handleChangeItem}
                addContact={addContact}
            />
            <Form
                item={list}
                onChange={handleChangeItem}
                onSubmit={handleSave}
                onRemove={onRemove}
            />
        </div>
    )
}

export default App