import { useState } from 'react';
import { useTodo, FILTER_STATUS_MAP } from './hooks/TodoHook';
import TodoItems from './components/TodoItems';
import TodoStatusFilter from './components/TodoStatusFilter';

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
      <TodoStatusFilter onClickFilterButton={changeFilterStatus} />
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
