import React from 'react'
import './Form.css'

function Form({ onChange, item, onSubmit, onRemove }) {
    function handleInputChange(e) {
        onChange({
            ...item,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="wrapper">
            <h2 className="contacts_head">Edit</h2>
            <form className="form" onSubmit={(e) => { onSubmit(e) }}>
                <div>
                    <label htmlFor="">First name</label>
                    <input
                        id="first-name"
                        className="input first-name"
                        type="text"
                        name="name"
                        // value={item.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="">Last name</label>
                    <input
                        id="last-name"
                        className="input last-name"
                        type="text"
                        name="lastname"
                        // value={item.lastname}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="">Phone</label>
                    <input
                        id="phone-number"
                        className="input phone-number"
                        type="tel"
                        name="phone"
                        // value={item.phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input
                        id="email"
                        className="input email"
                        type="email"
                        name="mail"
                        // value={item.mail}
                        onChange={handleInputChange}
                    />
                </div>

                {/* <div className="btn-block">
                    <button className="btn save">Save</button>
                    {item.id
                        ? <button onClick={((e) => onRemove(e, item))} className="btn delete">Delete</button>
                        : null
                    }
                </div> */}
            </form>
        </div>
    )
}

export default Form
