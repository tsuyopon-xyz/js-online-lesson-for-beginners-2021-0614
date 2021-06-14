import { useState } from 'react';
import {
  FILTER_STATUS_MAP,
  FilterValue,
  TODO_STATUS_MAP,
  TodoStatusValue,
  Todo,
} from 'types/Todo';

let nextId = 1;
const createTodo = (title: string): Todo => {
  return {
    id: nextId++,
    title,
    status: TODO_STATUS_MAP.NOT_START,
  };
};

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentStatusFilter, setCurrentStatusFilter] = useState<FilterValue>(
    FILTER_STATUS_MAP.ALL
  );

  const addTodo = (title: string) => {
    if (!title) {
      alert('タイトルを入力してください');
      return;
    }

    const todo = createTodo(title);
    setTodos([...todos, todo]);
  };

  const changeTodoStatusById = (id: number, newStatus: TodoStatusValue) => {
    const newTodos = todos.map((todo) => {
      if (id !== todo.id) {
        return todo;
      }

      return { ...todo, status: newStatus };
    });

    setTodos(newTodos);
  };

  const changeFilterStatus = (newStatus: FilterValue) => {
    setCurrentStatusFilter(newStatus);
  };

  const deleteTodo = (id: number) => {
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
