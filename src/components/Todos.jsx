import React, { Component } from 'react';
import Todo from './Todo';



class Todos extends Component {
    handleRender = () => {
        if (this.props.todos.length !== 0){
            return (this.props.todos.map(
                todo => <Todo key={todo.id} id={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} setActiveSt={this.props.setActiveSt} />
            ));
        }else{
            return (<p className='text-white bg-danger text-center p-3 m-0'>No todos to render</p>)
        }
    }
    
    render = () => {
        return (  
            <section className='todos-container'>
                {this.handleRender()}
            </section>
        );
    }
    
}
 
 
export default Todos;