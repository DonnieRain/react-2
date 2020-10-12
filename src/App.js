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
        surname: '',
        phone: '',
        // mail: ''
    })

    useEffect(() => {
        contactsSevice.get('/')
            .then(({ data }) => { setList(data) })
    }, [])

    function clearForm() {
        return {
            id: null,
            name: '',
            surname: '',
            phone: '',
            // mail: ''
        }
    }

    function handleChangeItem(item) {
        setEdit(item)
    };



    function handleUpdateContacts(contact, editContact) {
        contactsSevice.put('/' + contact.id, editContact).then(({ data }) => {
            setList(list.map(e => e.id === data.id ? data : e))
        })
    }

    function handleAddContacts(newContact) {
        contactsSevice.post('/', newContact).then(({ data }) => {
            setList([...list, data])
        })
    }

    function handleSave(e) {
        e.preventDefault()

        if (edit.id !== null) {
            const contact = list.find(item => item.id === edit.id)
            const editContact = { ...contact, ...edit }

            handleUpdateContacts(contact, editContact)

        } else {
            const newContact = { ...edit };

            handleAddContacts(newContact)
            setEdit(clearForm)
        }
    };

    function addContact() {
        setEdit(clearForm)
    }

    function onRemove(e, item) {
        e.preventDefault()

        contactsSevice.delete('/' + item.id).then(() => {
            let deleteElement = list.filter(e => e.id !== item.id)
            setList(deleteElement)
            setEdit(clearForm)
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
                item={edit}
                onChange={handleChangeItem}
                onSubmit={handleSave}
                onRemove={onRemove}
            />
        </div>
    )
}

export default App