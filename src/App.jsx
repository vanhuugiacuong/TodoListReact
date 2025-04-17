import { useState } from 'react';
import AddTodo from './components/AddToDo';
import TaskList from './components/TaskList';


let nextId = 3;
const initialTodos = [
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([...todos, {
      id: nextId++,
      title: title,
      done: false
    }]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(todo =>
      todo.id === nextTodo.id ? nextTodo : todo
    ));
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-red-900 to-red-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          To-Do List 
          <span role="img" aria-label="memo">📝</span>
        </h1>
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </div>
  );
}