import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todos = [], completeTodoItem }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodoItem={completeTodoItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
