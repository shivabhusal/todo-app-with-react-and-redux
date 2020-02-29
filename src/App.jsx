import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'

const filters = ['all', 'completed', 'incomplete']
function App() {
  return (
    <div className="App">
      <h1>TODO Managers</h1>
      <AddTodo/>
      <TodoList todos={[{content: 'Task 1'}, {content: 'Task 2'}]}/>
      <VisibilityFilter filters={filters}/>
    </div>
  );
}

export default App;
