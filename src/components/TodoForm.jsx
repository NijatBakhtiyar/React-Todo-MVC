import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();

        this.formSubmit = this.formSubmit.bind(this)
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e.currentTarget.todo.value)
        e.currentTarget.reset();
    }
    render() {
        return (
            <div className='todo-input'>
                <form onSubmit={this.formSubmit}>
                    <input type="text" name='todo' placeholder='What needs to be done?' required/>
                </form>
            </div>
        );
    }
}

export default TodoForm;