import React, { Component } from 'react';


class Todo extends Component {

    handleRender = () => {
        if (this.props.todo.active === false){
            return ({
                textDecoration: 'line-through'
            });
        }
    }

    render() { 
        let { id:todo_id, content } = this.props.todo;
        return ( 
            <section className='todo-container d-flex align-items-center justify-content-between bg-danger' style={todoStyle}>
                <div style={this.handleRender()}>
                    <input type="checkbox" onClick={ () => { this.props.setActiveSt(todo_id) } } className='mr-2'/>{ content }
                </div>
                <a href='#' onClick={() => this.props.deleteTodo(todo_id)} style={ deleteBtnStyle }>&times;</a>
            </section>
        );
    }
}
 

let todoStyle = {
    color : "Whitesmoke",
    // background: "rgb(148, 34, 34)",
    padding: "10px",
    borderBottom: '.5px rgba(255,255,255,.5) solid'
}

let deleteBtnStyle = {
    color: 'whitesmoke',
    textDecoration: 'none',
    fontSize: '1.2rem',
}

 
export default Todo;
