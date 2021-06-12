import { useState } from 'react';

export const TODO_STATUS_MAP = {
  NOT_START: '未着手',
  IN_PROGRESS: '作業中',
  DONE: '完了',
};

export const FILTER_STATUS_MAP = {
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

// const DUMMY_TODOS = Array.from({ length: 10 }).map((_, index) =>
//   createTodo('ダミー' + index)
// );

export const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [currentStatusFilter, setCurrentStatusFilter] = useState(
    FILTER_STATUS_MAP.ALL
  );

  const addTodo = (title) => {
    if (!title) {
      alert('タイトルを入力してください');
      return;
    }

    const todo = createTodo(title);
    setTodos([...todos, todo]);
  };

  const changeTodoStatusById = (id, newStatus) => {
    const validTodoStatuses = Object.values(TODO_STATUS_MAP);
    if (!validTodoStatuses.includes(newStatus)) {
      alert('不正なTodo状態の値です');
      return;
    }

    const newTodos = todos.map((todo) => {
      if (id !== todo.id) {
        return todo;
      }

      return { ...todo, status: newStatus };
    });

    setTodos(newTodos);
  };

  const changeFilterStatus = (newStatus) => {
    const validFilterStatuses = Object.values(FILTER_STATUS_MAP);
    if (!validFilterStatuses.includes(newStatus)) {
      alert('不正なフィルター値です');
      return;
    }

    setCurrentStatusFilter(newStatus);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => id !== todo.id);
    setTodos(newTodos);
  };

  const getTodosByCurrentFilter = () => {
    const filteredTodos =
      currentStatusFilter === FILTER_STATUS_MAP.ALL
        ? [...todos]
        : todos.filter((todo) => todo.status === currentStatusFilter);

    return filteredTodos;
  };

  return {
    todos,
    currentStatusFilter,
    addTodo,
    changeTodoStatusById,
    changeFilterStatus,
    deleteTodo,
    getTodosByCurrentFilter,
  };
};
