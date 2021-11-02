import { Component } from 'react';

class List extends Component {

    constructor() {
        super()
        console.log(this.props);
    }

    render() {

        const { tasks, deleteTask, editTask } = this.props;

        return (
            <>
                <ul className="list-group mt-5 mx-5 justify-content-center list-group">
                    {tasks.map((task, index) => (
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <div>
                                <p>Descritpion : {task.description}</p>
                            </div>
                            <div>
                                <p>Statut : {task.status}</p>
                            </div>
                            <div>
                                <button onClick={() => editTask(index)} className="btn btn-primary">Éditer</button>
                            </div>
                            <div>
                                <button onClick={() => deleteTask(index)} className="btn btn-danger">Supprimer</button>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </>
        )
    }
}

export default List;