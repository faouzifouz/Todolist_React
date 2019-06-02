// import React from 'react';
import React, {Component, Fragment} from 'react'
import './Todoinput.css'
import * as firebase from 'firebase'
import Base from '../Base'

export default class Todoinput extends React.Component{
    constructor(props){
    super(props);
        this.state = {value:''}
        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        // firebase.initializeApp(Base)
    }

    // // quand le compnent est chargé:
    // componentWillMount(){
    //     // je crée constante qui se connectera à la table de ma bdd
    //     const todo = firebase.database().ref('Taches')
    //     // parcourir les données et les capturer
    //     todo.ref('value', snapshot => {
    //         this.setState({
    //             listing: snapshot.val()
    //         })
    //     })
    // }

    handleChange(e){
        this.setState({value: e.target.value})
    }
    addTodo(todo){
         if (todo.length > 0){
            this.props.addTodo(todo) 
            this.setState({value: ''})
           
         }
    


       
    }
    render() {
        return(
        
        <Fragment>
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Ajouter</button>
            </div>
        </Fragment>

    )
    }
    
}