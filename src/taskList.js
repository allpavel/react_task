import React from 'react';

export function TaskList({ allTasks, handleDelete }) {
    return (
        <ul>
            {allTasks.map(({ title, description, id }) => (
                <li key={id}>
                    <div>
                        <h2>{title}</h2>
                        <button onClick={handleDelete}>X</button>
                    </div>
                    {!description ? null : <p>{description}</p>}
                </li>
            ))}
        </ul>
    );
}