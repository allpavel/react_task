import React from 'react';

export class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const getId = event.target.value;
        this.props.handleDelete(getId);
    }

    render() {
        return (
            <ul>
                {this.props.allTasks.map(({ title, description, id }) => (
                    <li key={id}>
                        <div>
                            <h2>{title}</h2>
                            <button value={id} onClick={this.handleClick}>X</button>
                        </div>
                        {!description ? null : <p>{description}</p>}
                    </li>
                ))}
            </ul>
        );
    }
}