import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : [],
            text : ""
        }
    }

    submitTodo = e => {
            e.preventDefault();
            this.setState({
                text:""
            }) 
            this.setState(
                {todos : [...this.state.todos,{
                    desc : this.state.text,
                } ]}
            )
            
    }

    handleChange = async e => {
        await this.setState(
            {
                text : e.target.value
            }
        )
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
                <div>{this.state.todos.map((todo) => <div className="px-4 py-4 my-3 rounded border border-white"> {todo.desc}</div>)}</div>
             </div>




        );
    }


}

export default App;