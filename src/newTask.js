import React from 'react';

export function NewTask({ newTask, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="Add a new task..."
                value={newTask.title || ''}
                onChange={handleChange} 
            />
            {!newTask.title ? null : (
                <>
                    <textarea 
                        name="description"
                        placeholder="Add a description..."
                        value={newTask.description || ''}
                        onChange={handleChange} />
                    <button>Add task</button>
                </>
            )}
        </form>
    );
}