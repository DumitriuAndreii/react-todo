import React from 'react';

const TodoItem = ({ todo, todos, setTodos }) => {
  const toggleComplete = () => {
    setTodos(
      todos.map(item => 
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={toggleComplete} className={todo.completed ? "line-through" : ""}>
        {todo.text}
      </span>
      <button onClick={deleteTask} className="btn btn-error btn-xs ml-2">Delete</button>
    </div>
  );
};

export default TodoItem;
