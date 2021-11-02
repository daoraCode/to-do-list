import { Component } from 'react';
import Form from './component/Form';
import List from './component/List';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  // initializer
  constructor() {
    super()

    // initial state
    this.state = {
      tasks: []
    }
  

  // bindings
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.setEditLine = this.setEditLine.bind(this);
  }

  // methods - functions
  addTask(description) {
    const task = {
      description: description,
      status: "to do"
    }
    this.setState({ tasks: [task, ...this.state.tasks] });
  }

  deleteTask(index) {
    // array : tableau vide state, splice : sauter un index
    // possiblement plusieurs éléments de todo à l'intérieur du tableau
    const array = [...this.state.tasks];
    array.splice(index, 1);
    this.setState({ tasks: array }); // remet à jour le state
  }

  setEditLine() {
    const array = [...this.state.tasks];
    let array = [...this.state.tasks];
    let task = array[index];
    this.setState({ });
  }

  editTask(index) {
    const array = [...this.state.tasks];
    array[index] = 
    this.setState({  });
  }

  // displaying render
  render() {
    return (
      <div>
        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} />
      </div>
    );
  }
}

export default App;