import React, { Component } from 'react';
import showAlert from '../script';


class AddTodo extends Component {
    state = {
        input: ''
    }

    handleInput = (e) => {
        this.setState({input: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.input === '')
            showAlert("Please fill in the field", 4000);
        else
            this.props.createTodo(this.state.input);
            setTimeout(() => {
                this.setState({input: ''});
            }, 4000);
    }

    render() { 
        return (
            <form className='' onSubmit={(e) => { this.handleSubmit(e) }}>
                <input type="text" name='todo-content' value={this.state.input} onChange={(e) => {this.handleInput(e) }} style={inputStyle} placeholder='add a todo'/>
            </form>
        );
    }
}

let inputStyle = {
    width: '100%',
    boxSizing: "border-box",
    padding: '5px 10px',
    background: "rgb(46, 46, 48)",
    border: 'none',
    outline: 'none',
    color: '#ccc',
    borderBottom: '.5px #ccc solid'
}

export default AddTodo;