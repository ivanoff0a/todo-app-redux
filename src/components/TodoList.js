import React, {Component} from 'react';
import {connect} from "react-redux";
import TodoItem from "./TodoItem";
import {addTodo} from "../actions/todoActions";

class TodoList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.todos.map(i => <TodoItem key={i.id} title={i.title}/>)}
        </ul>
        <button onClick={this.addTodo}>Add New Todo</button>
      </div>
    );
  }

  addTodo = () => this.props.add();
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch(addTodo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);