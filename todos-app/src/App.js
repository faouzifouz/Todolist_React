import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todoinput from './components/Todoinput';
import TodoItem from './components/TodoItem';
import Rebase from 're-base';
import * as firebase from 'firebase'
import app from './Base';
let base = Rebase.createClass(app.database());


class App extends Component {
  constructor(props) {
    super(props);
//remettre les occurence todos
    
    this.state= {
      todos: [],
      nextId:0,
      // test Firebase
      loading: true,
      // todos: [],
    }
    
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(todoText){
    let todos = this.state.todos.slice()
    todos.push({id: this.state.nextId, text: todoText})
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId

    })
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }
  componentDidMount() {
    //firebase
    this.setState({ loading: true });
    this.firebase = base.syncState('count', {
      context: this,
      state: 'count',
      asArray: true,
      
    });
    //firebase
    // this.props.firebase.todos().on('value', snapshot => {
    //   // convert todos list from snapshot
    //   //firebase
    //   this.setState({ loading: false });
    // });
  }

  componentWillUnmount() {
    base.removeBinding(this.firebase);
    //firebase
    this.props.firebase.todos().off();
    
  }
  // // quand le component est chargé:
    componentWillMount(){
        // je crée constante qui se connectera à la table de ma bdd
        const todo = firebase.database().ref('Taches')
        // parcourir les données et les capturer
        todo.on('value', snapshot => {
            this.setState({
                listing: snapshot.val(),
                loading:false
                
            })
        })
    }
    
   


  
  render(){
    //firebase
    const { todos, loading } = this.state;
   return (
    <div className="App">
     <div className="todo-wrapper">
       <Header />
       <div>{loading && <div>Chargement ...</div>}
       <Todoinput todoText="" addTodo={this.addTodo} todos={todos} />
       </div>
       <ul>
         {
           this.state.todos.map((todo) => {
             return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
           })
         }
       </ul>
       
        
       <div>{this.state.listing } </div>
     </div>
     
    </div>
  )
 }
}

export default App;
