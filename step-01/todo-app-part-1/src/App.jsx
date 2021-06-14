import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(['abc1', 'abc2', 'abc3']);

  const deleteTodoByIndex = (index) => {
    const newTodos = todos.filter((todoTitle, _index) => {
      return index !== _index;
    });

    setTodos((prevTodos) => {
      return newTodos;
    });
  };

  return (
    <div className="App">
      <h1>Todoアプリ</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (!inputValue) {
              alert('入力必須です!');
              return;
            }
            setTodos([...todos, inputValue]);
            setInputValue('');
          }}
        >
          追加
        </button>
      </div>
      <ul>
        {todos.length > 0 &&
          todos.map((todoTitle, index) => {
            return (
              <li key={index}>
                {todoTitle}
                <button
                  onClick={() => {
                    deleteTodoByIndex(index);
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
