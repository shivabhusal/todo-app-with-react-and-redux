import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

function AddTodo({ addTodo }) {
    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleAdd = () => {
        setValue('')
        addTodo(value)
    }

    return (
        <>
            <input type="text" onChange={handleOnChange} value={value} placeholder="You text here" />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default connect(null, { addTodo })(AddTodo)
