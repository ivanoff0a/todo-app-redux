import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import Provider from "react-redux/es/components/Provider";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <TodoList/>
      </Provider>

    </div>
  );
}

export default App;
