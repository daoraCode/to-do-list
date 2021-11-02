import { Component } from 'react';
import Form from './component/Form';
import List from './component/List';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  // initializer
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  

  // bindings
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  // methods
  addTask(description) {
    const task = {
      description: description,
      status: "to do"
    }
    this.setState({ tasks: [task, ...this.state.tasks] });
  }

  deleteTask(index) {
    const array = [...this.state.tasks];
    array.splice(index, 1);
    this.setState({ tasks: array });
  }

  // editTask() {
  //   this.setState({});
  // }

  // displaying render
  render() {
    return (
      <div>
        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;