import React from 'react';

export class NewTask extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input
                    name="title"
                    placeholder="Add a new task..."
                    value={this.props.newTask.title || ''}
                    onChange={this.props.handleChange} 
                />
                {!this.props.newTask.title ? null : (
                    <>
                        <textarea 
                            name="description"
                            placeholder="Add a description..."
                            value={this.props.newTask.description || ''}
                            onChange={this.props.handleChange} />
                        <button>Add task</button>
                    </>
                )}
            </form>
        );
    }
}