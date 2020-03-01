import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>TODO Managers</h1>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
    </div>
    </Provider>
  );
}

export default App;
