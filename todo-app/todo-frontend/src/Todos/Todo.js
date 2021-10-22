import React from 'react';

const Todo = ({ todo }) => (
  <div>
    <h1>{todo.text}</h1>
    <p>{todo.done.toString()}</p>
  </div>
)

export default Todo;