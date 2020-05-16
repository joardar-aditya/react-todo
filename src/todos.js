import React,{ Component } from 'react';

class Todos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            update : null,
            text : null,
        }
    }
    _handleDelete(id){
        this.props._handleDelete(id);
    }

    _handleUpdate(id) {
        const t= this.state.text;
        console.log(t);
        this.props._handleUpdate(id, t);
        this.setState({
            update : null}
        )
        
    }

    changeUpdate(id){
        this.setState({
            update : id
        })
    }

    _addUpdateText = async (e) => {
        e.preventDefault();
        await this.setState(
            {
                text : e.target.value,
            }
        )
    };

    render() {
        return this.props.items.map(
            todo => (
                <div><div className="px-4 py-4 my-3 rounded border border-white row" key={todo.id}><div className="col-8">{todo.desc}</div>
                <div className="col-2"><button className="btn btn-secondary" type="button" onClick={this.changeUpdate.bind(this, todo.id)}> Update </button></div>
                <div className="col-2"><button className="btn btn-success" type="button" onClick={this._handleDelete.bind(this, todo.id)}> Done! </button></div>
                </div>
                {(this.state.update === todo.id)?<div>
                <div className="input-group mx-md-4 my-4">
                <div className="input-group-prepend">
                          <em className="input-group-text">Updated Todo:</em>
                </div>
                <input className="form-control" aria-label="With textarea" text={this.state.text} onChange={this._addUpdateText}></input>
                <div className="input-group-prepend">
                     <button className="btn btn-secondary" type="button" onClick={this._handleUpdate.bind(this, todo.id)}>Update</button>
                </div>
                </div>
                </div>:null}
                </div>
            )
        )
    }
}

export default Todos;