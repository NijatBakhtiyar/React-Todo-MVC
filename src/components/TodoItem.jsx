import React, { Component } from 'react';

class TodoItem extends Component {
    constructor() {
        super();
        this.state = {
            isEditing: false
        }
        this.updateIsEditing = this.updateIsEditing.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    updateIsEditing() {
        this.setState({
            isEditing: true
        })
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.onEdit(this.props.todo.id, e.currentTarget.todo.value)
        this.setState({
            isEditing: false
        })
    }

    render() {
        const { todo, onDelete, onChecked } = this.props
        const { isEditing } = this.state
        return (
            <div className='todo-item'>
                    <label onDoubleClick={this.updateIsEditing}>
                        <input type="checkbox" onChange={() => onChecked(todo.id)} checked={todo.checked ? 'checked' : ''} />
                        {isEditing ? <form onSubmit={this.formSubmit}><input type="text" name='todo' className='note' defaultValue={todo.name} required /></form> : <span className={todo.checked ? 'checked' : null}>{todo.name}</span>
                        }
                    </label>
                <button onClick={() => onDelete(todo.id)}>X</button>
            </div>
        );
    }
}

export default TodoItem;