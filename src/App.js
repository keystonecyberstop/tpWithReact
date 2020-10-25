import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, content: 'buy some milk'},
        {id: 2, content: 'going to school'}
      ]
    }
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
