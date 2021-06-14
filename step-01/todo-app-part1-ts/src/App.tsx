import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (!inputValue) {
      alert('入力必須です');
      return;
    }

    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const deleteTodobyIndex = (index: number) => {
    const newTodos = todos.filter((_, _index) => {
      return index !== _index;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todoアプリ in ts</h1>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          value={inputValue}
        />
        <button onClick={addTodo}>追加</button>
      </div>
      <ul>
        {todos.length > 0 &&
          todos.map((todoTitle, index) => {
            return (
              <li key={index}>
                {todoTitle}
                <button
                  onClick={() => {
                    deleteTodobyIndex(index);
                  }}
                >
                  削除
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
