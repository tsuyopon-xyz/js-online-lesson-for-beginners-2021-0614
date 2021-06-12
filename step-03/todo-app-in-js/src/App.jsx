import { useState } from 'react';

const TODO_STATUS_MAP = {
  NOT_START: '未着手',
  IN_PROGRESS: '作業中',
  DONE: '完了',
};

const FILTER_STATUS_MAP = {
  ...TODO_STATUS_MAP,
  ALL: '全て',
};

let nextId = 1;
const createTodo = (title) => {
  return {
    id: nextId++,
    title,
    status: TODO_STATUS_MAP.NOT_START,
  };
};

const DUMMY_TODOS = Array.from({ length: 10 }).map((_, index) =>
  createTodo('ダミー' + index)
);

function App() {
  const [todoTitle, setTodoTitle] = useState('');
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const [currentStatusFilter, setCurrentStatusFilter] = useState(
    FILTER_STATUS_MAP.ALL
  );

  const addTodo = () => {
    if (!todoTitle) {
      alert('タイトルを入力してください');
      return;
    }

    const todo = createTodo(todoTitle);
    setTodos([...todos, todo]);
    setTodoTitle('');
  };

  const changeStatus = (id, newStatus) => {
    const newTodos = todos.map((todo) => {
      if (id !== todo.id) {
        return todo;
      }

      return { ...todo, status: newStatus };
    });

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => id !== todo.id);
    setTodos(newTodos);
  };

  const renderTodos = (todos, currentStatusFilter) => {
    const filteredTodos =
      currentStatusFilter === FILTER_STATUS_MAP.ALL
        ? [...todos]
        : todos.filter((todo) => todo.status === currentStatusFilter);

    if (filteredTodos.length === 0) {
      return <p>「{currentStatusFilter}」のTodoは1件もありません</p>;
    }

    const renderStatusChangeButton = (todo) => {
      return (
        <>
          {/* 未着手ボタンの表示 */}
          {todo.status !== TODO_STATUS_MAP.NOT_START ? (
            <button
              onClick={() => {
                changeStatus(todo.id, TODO_STATUS_MAP.NOT_START);
              }}
            >
              「未着手」にする
            </button>
          ) : null}

          {/* 作業中ボタンの表示 */}
          {todo.status !== TODO_STATUS_MAP.IN_PROGRESS ? (
            <button
              onClick={() => {
                changeStatus(todo.id, TODO_STATUS_MAP.IN_PROGRESS);
              }}
            >
              「作業中」にする
            </button>
          ) : null}

          {/* 完了ボタンの表示 */}
          {todo.status !== TODO_STATUS_MAP.DONE ? (
            <button
              onClick={() => {
                changeStatus(todo.id, TODO_STATUS_MAP.DONE);
              }}
            >
              「完了」にする
            </button>
          ) : null}
        </>
      );
    };

    return (
      <ul>
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id}>
              ID{todo.id} : {todo.title}（状態 : {todo.status}）
              {renderStatusChangeButton(todo)}
              <button onClick={() => deleteTodo(todo.id)}>削除する</button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>Todo App in JS</h1>
      <div>
        <h2>フィルター</h2>
        <button onClick={() => setCurrentStatusFilter(FILTER_STATUS_MAP.ALL)}>
          「全て」表示する
        </button>
        <button
          onClick={() => setCurrentStatusFilter(FILTER_STATUS_MAP.NOT_START)}
        >
          「未着手」のみ表示する
        </button>
        <button
          onClick={() => setCurrentStatusFilter(FILTER_STATUS_MAP.IN_PROGRESS)}
        >
          「作業中」のみ表示する
        </button>
        <button onClick={() => setCurrentStatusFilter(FILTER_STATUS_MAP.DONE)}>
          「完了」のみ表示する
        </button>
      </div>
      <div>
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <button onClick={addTodo}>追加</button>

        {renderTodos(todos, currentStatusFilter)}
      </div>
    </div>
  );
}

export default App;
