import { useTodo } from './hooks/TodoHook';
import TodoItems from './components/TodoItems';
import TodoInput from './components/TodoInput';
import TodoStatusFilter from './components/TodoStatusFilter';

function App() {
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
      <h1>Todo App in TS</h1>
      <TodoStatusFilter onClickFilterButton={changeFilterStatus} />
      <TodoInput onClickAddButton={addTodo} />
      <TodoItems
        todos={filteredTodos}
        onClickDeleteButton={deleteTodo}
        onClickChangeTodoStatus={changeTodoStatusById}
      />
    </div>
  );
}

export default App;
