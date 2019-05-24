import {ADD_TODO} from "../constants";

let initialState = [{id: 1, title: 'Win Hackathon'}];

let todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {id: action.payload.id, title: action.payload.title}];
    default:
      return state;
  }
}

export default todoReducer;