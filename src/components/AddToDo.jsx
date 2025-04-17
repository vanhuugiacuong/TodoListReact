import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('');
    return (
        <div className="flex items-center gap-2 p-4 bg-white rounded-lg ">
            <input
                type="text"
                placeholder="Thêm"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="flex-1 px-4 py-2  bg-gray-300 rounded-4xl focus:outline-none focus:ring-1 focus:ring-grey-400 duration-200 hover:scale-110"
            />
            <button
                onClick={() => {
                    if (title.trim() !== '') {
                        onAddTodo(title);
                        setTitle('');
                    }
                }}
                className="px-4 py-2 bg-[#800000] text-white rounded-4xl hover:bg-[#000000] transition-transform duration-200 hover:scale-120"
            >
                Add
            </button>
        </div>
    );
}
