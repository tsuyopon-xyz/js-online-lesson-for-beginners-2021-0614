import { useState } from 'react';

export default function TodoInput({ onClickAddButton }) {
  const [todoTitle, setTodoTitle] = useState('');
  return (
    <div>
      <input
        type="text"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
      />
      <button onClick={() => onClickAddButton(todoTitle)}>追加</button>
    </div>
  );
}
