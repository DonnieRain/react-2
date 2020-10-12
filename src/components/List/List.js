import React from 'react'
import './List.css'

function List({ list, onSelect, addContact }) {
    return (
        <div>
            <div className="contacts">
                <div className="contacts_list" >
                    {list.map(item => {
                        return (
                            <div className="contacts_item" key={item.id} onClick={() => onSelect(item)}>
                                <p className="contact">{item.name}</p>
                                <p className="contact">{item.surname}</p>
                                <p className="contact">{item.phone}</p>
                                {/* <p className="contact">{item.mail}</p> */}
                            </div>
                        )
                    })}
                </div>
                <div onClick={addContact} className="add">Add</div>
            </div>
        </div>
    )
}

export default List
