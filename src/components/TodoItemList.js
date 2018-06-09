import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.todos !== nextProps.todos ||
      this.props.textColor !== nextProps.textColor
    );
  }

  render() {
    const { todos, textColor, onToggle, onRemove } = this.props;
    console.log("list " + textColor);
    return (
      <div>
        {todos.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            textColor={textColor}
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
