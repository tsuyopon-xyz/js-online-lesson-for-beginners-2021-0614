import React, { useState } from 'react';

type Props = {
  onClickAddButton: (title: string) => void;
};

const TodoInput: React.VFC<Props> = ({ onClickAddButton }) => {
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
};

export default TodoInput;
