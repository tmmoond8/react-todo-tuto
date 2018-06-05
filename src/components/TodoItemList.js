import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        {todos.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            checked={item.checked}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    );
  }
}

export default TodoItemList;
