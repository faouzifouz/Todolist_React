import React from 'react';
import './Todoinput.css'

export default class Todoinput extends React.Component{
    constructor(props){
    super(props)
        this.state = {value:"test"}

        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    handleChange(e){
        console.log("salut")
    }
    addTodo(todo){
        console.log("1000", "todo")
    }
    render() {
        return(
        <div>
            <input type="text" value="" onChange={this.handleChange}/>
            <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Ajouter</button>
        </div>
    )
    }
    
}