import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const initialList = [
    { id: 1, text: 'Make something great today!', completed: false },
    { id: 2, text: 'Dream Big', completed: false },
    { id: 3, text: 'Do not stop!', completed: false }
  ];
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(initialList);


  const addTask = () => {
    if (!task) return; // Don't add empty tasks
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(''); // Reset input field after adding
  };

  return (
    <div className="App">
      <div className="max-w-xl mx-auto pt-5">
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-xs"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="btn btn-primary ml-2" onClick={addTask}>Add</button>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
