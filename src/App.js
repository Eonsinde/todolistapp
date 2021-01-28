import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import showAlert from './script';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Footer from './components/Footer';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'uuid';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos: [
      // {id: uuid.v4(), content: 'wash the car', active: true, date: new Date().toDateString()},
      // {id: uuid.v4(), content: 'call lekan for his birthday', active: true, date: new Date().toDateString()},
      // {id: uuid.v4(), content: 'remind daddy about the poultry vaccine', active: true, date: new Date().toDateString()}
    ]
  }

  componentDidMount = () => {
    axios('/api/todos/')
      .then(res => { this.setState({todos: res.data}) })
      .catch(e => console.log(e.message));
  }

  setActiveSt = (id) => {
    let todos = this.state.todos;
    todos.forEach(todo => {
      if (todo.id === id){
        todo.active = todo.active ? false : true;
        axios.put(`/api/todos/${id}/`, todo)
          .then(res => {res.status === 200 ? showAlert('successfully updated', 4000): showAlert('update failed', 4000)})
          .catch(e => console.log(e.message));
      }
    });
    this.setState({todos});
  }

  createTodo = (todo_content) => {
    const strDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    let new_todo = { content: todo_content, active: true, date_created: strDate};
    axios.post('/api/todos/', new_todo)
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
      .catch(e => console.log(e.message));
  }


  deleteTodo = (id) => {
    let todos = this.state.todos;
    todos.forEach((todo,index) => {
      if(todo.id === id){
        todos.splice(index, 1);
        axios.delete(`/api/todos/${id}`)
          .then(res => showAlert('todo removed', 4000))
          .catch(e => console.log(e.message));
      }
    });
    this.setState({todos});
  }

  render() {
    return (
      <Router>
        <main className='app'>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo createTodo={this.createTodo} />
              <Todos todos={this.state.todos} setActiveSt={this.setActiveSt} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
