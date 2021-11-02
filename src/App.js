import { Component } from 'react';
import Form from './component/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

  // bindings
    this.addTask = this.addTask.bind(this);
  }

  // methods
  addTask(task) {
    console.log(task)
  }


  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;