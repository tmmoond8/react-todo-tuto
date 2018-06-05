import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트에 대해", checked: false },
      { id: 1, text: "밤이다", checked: true },
      { id: 2, text: "괴로운 밤이다.", checked: true }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = text => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: [...todos, { id: this.id++, text: input, checked: false }]
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      })
    });
  };

  handleRemove = id => {
    this.setState({
      todos: this.state.todos.filter(item => (item.id !== id ? true : false))
    });
  };

  render() {
    const { todos, input } = this.state;
    const {
      handleCreate,
      handleChange,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    return (
      <div className="App">
        <TodoListTemplate
          form={
            <Form
              value={input}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
            />
          }
        >
          <TodoItemList
            todos={todos}
            onRemove={handleRemove}
            onToggle={handleToggle}
          />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
