import React, { Component } from 'react';
import BottomBar from './BottomBar';
import Input from './TodoForm';
import TodoItem from './TodoItem';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
            todoType: 'all'
        };

        this.onSubmit = this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onChecked = this.onChecked.bind(this)
        this.onTypeChange = this.onTypeChange.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
        this.onEdit = this.onEdit.bind(this)
    }

    clearCompleted() {
        this.setState({
            todoList: this.state.todoList.filter(todo => todo.checked === false)
        })
    }

    onSubmit(todo) {
        const newItem = {
            name: todo,
            checked: false,
            id: +new Date()
        }
        this.setState({
            todoList: [...this.state.todoList, newItem]
        })
    }

    onDelete(todoId) {
        this.setState({
            todoList: this.state.todoList.filter(todo => todo.id !== todoId)
        })
    }

    onChecked(todoId) {
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo, checked: !todo.checked
                    }
                }
                return todo;
            }),
        })
    }

    onTypeChange(todoType) {
        this.setState({
            todoType
        })
    }

    onEdit(todoId, todoName) {
        this.setState({
            todoList: this.state.todoList.map(todo => {
                if (todoId === todo.id) {
                    return { ...todo, name: todoName }
                }
                return todo
            })
        })
    }

    render() {
        const { todoList, todoType } = this.state;
        const unCheckedList = todoList.filter(todo => todo.checked === false);
        const checkedList = todoList.filter(todo => todo.checked === true);
        const list = todoType === 'all' ? todoList : todoType === 'active' ? unCheckedList : checkedList;

        return (
            <div className='todos'>
                <Input onSubmit={this.onSubmit} />
                {list.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={this.onDelete}
                        onChecked={this.onChecked}
                        onEdit={this.onEdit}
                    />
                ))}

                {this.state.todoList.length > 0
                    &&
                    <BottomBar
                        unCheckedCount={unCheckedList.length}
                        onTypeChange={this.onTypeChange}
                        clearCompleted={this.clearCompleted}
                        todoType={todoType}
                    />}
            </div>
        );
    }
}

export default Todos;