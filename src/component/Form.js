import React from "react";

class Form extends React.Component {
    render() {
        return (
            <>
                <form className="conatainer-fluid mt-5 mx-5 justify-content-center">
                    <h1 className="heading-title">Bienvene sur TodoList</h1>
                    <label for="exampleInputPassword1" className="form-label my-4">Todo</label>
                    <div className="row">
                        <div className="col-6">
                            <input type="password" className="form-control" id="exampleInputPassword1" />
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