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
    ],
    textColor: "#343a40"
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

  handleSelectColor = e => {
    console.log(e.target.value);
    this.setState({
      textColor: e.target.value
    });
  };

  render() {
    const { todos, input, textColor } = this.state;
    const {
      handleCreate,
      handleChange,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;
    return (
      <div className="App">
        <TodoListTemplate
          form={
            <Form
              value={input}
              textColor={textColor}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
              onSelectColor={handleSelectColor}
            />
          }
        >
          <TodoItemList
            todos={todos}
            textColor={textColor}
            onRemove={handleRemove}
            onToggle={handleToggle}
          />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
