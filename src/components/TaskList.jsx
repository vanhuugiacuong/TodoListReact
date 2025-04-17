import { useState } from 'react';

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
    return (
        <ul className="space-y-3">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    let todoContent;

    if (isEditing) {
        todoContent = (
            <div className="flex items-center gap-2 w-full">
                <input
                    value={todo.title}
                    onChange={e => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        });
                    }}
                    className="flex-1 px-3 py-1.5 border border-gray-300 rounded-4xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-1.5 text-sm text-white bg-black rounded-4xl hover:bg-grey-300 transition hover:"
                >
                    Save
                </button>
            </div>
        );
    } else {
        todoContent = (
            <div className="flex justify-between items-center w-full">
                <span
                    className={`flex-1 truncate ${todo.done ? 'line-through text-gray-400' : 'text-gray-800'
                        }`}
                >
                    {todo.title}
                </span>
                <button
                    onClick={() => setIsEditing(true)}
                    className="px-3 py-1.5 text-sm text-white bg-black rounded-4xl hover:bg-grey-300 transition"
                >
                    Edit
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3 p-4 bg-white rounded-4x1 shadow border border-gray-200 transition hover:shadow-md">
            <input
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    });
                }}
                className="w-5 h-5 text-[#800000] focus:ring-[#800000] rounded"
            />
            <div className="flex-1">{todoContent}</div>
            <button
                onClick={() => onDelete(todo.id)}
                className="w-8 h-8 flex items-center justify-center text-white bg-[#800000] rounded-full hover:bg-red-600 transition-transform duration-200 hover:scale-120 "
                title="Delete"
            >
                X
            </button>
        </div>
    );
}

