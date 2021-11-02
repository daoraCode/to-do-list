import React from "react";

class Form extends React.Component {
    // initializer

    constructor() {
        super() // to get props

        // initial state
        this.state = {
            task: ""
        }
        
        // binding
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    

    handleTaskDescriptionChange(e) {
        const { value } = e.target;
        this.setState({ task: value });
    }

    handleSubmit(e) {
        e.preventDefault();    
        // let inputTask = this.state.task;
        // inputTask = "";
        this.props.addTask(this.state.task);
    }

    render() {

        // state constant variable
        const { task } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit} className="container-fluid mt-5 mx-5 justify-content-center">
                    <h1 className="heading-title">TodoList</h1>
                    <label htmlFor="exampleInputPassword1" className="form-label my-4">Todo</label>
                    <div className="row">
                        <div className="col-6">
                            <input onChange={this.handleTaskDescriptionChange} value={task} type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-primary">Ajouter à ma liste</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
export default Form;