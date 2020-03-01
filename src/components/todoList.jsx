import React from 'react'
import { connect } from 'react-redux'
import { _ } from 'underscore'
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes'
import { toggleTodo } from '../redux/actions'

const Todo = ({ todo, id, toggleTodo }) => (
    <li className={todo.completed ? 'completed' : ''} onClick={() => toggleTodo(id)}>{todo.content}</li>
)

function TodoList({ todos, toggleTodo }) {
    return (
        _.keys(todos).map((id) => (
            <Todo key={id} id={id} toggleTodo={toggleTodo} todo={todos[id]} />
        ))
    )
}

const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { todos: state.todos.data }
    } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return ({
            todos: _.pick(state.todos.data, (todo) => todo.completed)
        })
    } else {
        return ({
            todos: _.pick(state.todos.data, (todo) => !todo.completed)
        })
    }
}

export default connect(mapState, { toggleTodo })(TodoList);