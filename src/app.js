import React, { useState } from 'react';
import NewTask from './newTask';
import TasksList from './taskList';

export default function App() {
    const [newTask, setNewTask] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prev) => ({...prev, id: Date.now(), [name]: value}));
    };

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTask.title) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});
    };

    const handleDelete = (taskIdToRemove) => {
        setAllTasks((prev) => prev.filter(task => task.id !== taskIdToRemove));
    };

    return (
        <div>
            <h1>Task</h1>
            <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <TasksList allTasks={allTasks} handleDelete={handleDelete}/>
        </div>
    );
}