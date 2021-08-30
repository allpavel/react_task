import React from 'react';
import { NewTask } from './newTaskClass';
import { TaskList } from './taskListClass';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: {},
            allTasks: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState((prevState) => ({
            ...prevState,
            newTask: {
                ...prevState.newTask,
                [name]: value,
                id: Date.now()
            }
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.newTask.title) return;
        this.setState((prevState) => ({
            newTask: {},
            allTasks: [prevState.newTask, ...prevState.allTasks]
        }));
    }

    handleDelete(taskToRemove) {
        this.setState({
            allTasks: this.state.allTasks.filter(task => parseInt(task.id) !== parseInt(taskToRemove))
        })
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <NewTask newTask={this.state.newTask} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <TaskList allTasks={this.state.allTasks} handleDelete={this.handleDelete}/>
            </div>
        );
    }
}