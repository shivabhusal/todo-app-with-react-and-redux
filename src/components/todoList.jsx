import React from 'react'
import { connect } from 'react-redux'
import { _ } from 'underscore'
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes'

const Todo = ({ todo }) => <li>{todo.content}</li>

function TodoList({ todos }) {
    return (
        _.keys(todos).map((i) => (
            <Todo key={i} todo={todos[i]} />
        ))
    )
}

const mapState = (state) => {
    if (state.visibilityFilter.activeFilter == FILTER_ALL) {
        return { todos: state.todos.data }
    } else if (state.visibilityFilter.activeFilter == FILTER_COMPLETED) {
        return ({
            todos: _.pick(state.todos.data, (todo) => todo.completed)
        })
    } else {
        return ({
            todos: _.pick(state.todos.data, (todo) => !todo.completed)
        })
    }
}

export default connect(mapState)(TodoList);