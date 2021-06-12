import { useState } from 'react';
import { useTodo, FILTER_STATUS_MAP } from './hooks/TodoHook';
import TodoItems from './components/TodoItems';

function App() {
  const [todoTitle, setTodoTitle] = useState('');
  const {
    addTodo,
    changeTodoStatusById,
    changeFilterStatus,
    deleteTodo,
    getTodosByCurrentFilter,
  } = useTodo();

  const filteredTodos = getTodosByCurrentFilter();

  return (
    <div>
      <h1>Todo App in JS</h1>
      <div>
        <h2>フィルター</h2>
        <button onClick={() => changeFilterStatus(FILTER_STATUS_MAP.ALL)}>
          「全て」表示する
        </button>
        <button onClick={() => changeFilterStatus(FILTER_STATUS_MAP.NOT_START)}>
          「未着手」のみ表示する
        </button>
        <button
          onClick={() => changeFilterStatus(FILTER_STATUS_MAP.IN_PROGRESS)}
        >
          「作業中」のみ表示する
        </button>
        <button onClick={() => changeFilterStatus(FILTER_STATUS_MAP.DONE)}>
          「完了」のみ表示する
        </button>
      </div>
      <div>
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <button onClick={() => addTodo(todoTitle)}>追加</button>
        <TodoItems
          todos={filteredTodos}
          onClickDeleteButton={deleteTodo}
          onClickChangeTodoStatus={changeTodoStatusById}
        />
      </div>
    </div>
  );
}

export default App;
