import {ADD_TODO} from "../constants";

export let addTodo = (id = 2, title = 'Grab Money') => {
  return {
    type: ADD_TODO,
    payload: {
      id, title
    }
  }
}