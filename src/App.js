import React, { useState } from 'react';
import TodoList from './components/TodoList'; // Ensure this component is created
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Make something great today!', completed: false },
    { id: 2, text: 'Dream Big', completed: false },
    { id: 3, text: 'Improve this app! :)', completed: false }
  ]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (!task) return; // Prevent adding empty tasks
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(''); // Clear input field after adding
  };

  return (
    <div className="flex flex-col items-center min-h-full h-max w-full pt-32 bg-[#124076]">
      <div className="w-full max-w-xl p-10 bg-[#F9E897] mb-10 rounded shadow flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Today's Todo List</h1>
        <div className="mb-4 flex justify-between">
          <input
            type="text"
            className="w-full  mr-4 py-2 px-4 border border-slate-900 rounded-xl"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            autoFocus
          />
          <button className="btn btn-primary border border-stone-800 py-2 px-4 rounded-lg bg-[#A4CE95]" onClick={addTask}>Add</button>
        </div>
        <div className="overflow-auto">
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
