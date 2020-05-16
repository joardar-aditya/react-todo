import React, {Component} from 'react';
import Todos from './todos';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : [],
            text : ""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    submitTodo = e => {
            e.preventDefault();
            if(this.state.text !== ""){
            this.setState(
                {todos : [...this.state.todos,{
                    desc : this.state.text,
                    done : false,
                    id: Date.now()
                } ]}
            );
            this.setState({
                text:""
            }); 
        }else{
                alert("Your todo cannot be empty!");
            }
            
    }
    
    handleChange = async e => {
        e.preventDefault();
        await this.setState(
            {
                text : e.target.value
            }
        )
        
    }
    //handling deleting the items in the list
    handleDelete(id) {
        this.setState( s => ({
            todos : s.todos.filter(el => el.id !== id),
        }));
    }
    //handling updating the list item in the list 
    handleUpdate(id, text) {
        if(text != null){
        let current_todo = this.state.todos;
        for(var i in current_todo){
            if(current_todo[i].id === id){
                current_todo[i].desc = text;
                break;
            }
        }
        this.setState({
            todos: current_todo,
        });}else{
            alert("Your todo cannot be empty!");
        }
    }

    render() {
        return (
             <div className="d-flex flex-column justify-content-center container my-5">
                <h2 className="d-block">So, what's in your schedule today?</h2>
                <div class="input-group mx-md-4 my-4">
                     <div class="input-group-prepend">
                               <em class="input-group-text">Your Todos:</em>
                     </div>
                     <input class="form-control" aria-label="With textarea" text={this.state.text} onChange={this.handleChange}></input>
                     <div class="input-group-prepend">
                          <button class="btn btn-secondary" type="button" onClick={this.submitTodo}>Add</button>
                     </div>
                </div>
                <div>
                   <Todos _handleUpdate={this.handleUpdate} _handleDelete={this.handleDelete} items={this.state.todos} />
                </div>
             </div>




        );
    }


}

export default App;