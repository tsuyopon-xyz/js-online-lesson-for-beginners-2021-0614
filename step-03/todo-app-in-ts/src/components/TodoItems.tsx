import React from 'react';
import { TODO_STATUS_MAP, TodoStatusValue, Todo } from 'types/Todo';

type Props = {
  todos: Todo[];
  onClickDeleteButton: (id: number) => void;
  onClickChangeTodoStatus: (id: number, status: TodoStatusValue) => void;
};

const TodoItems: React.VFC<Props> = ({
  todos,
  onClickDeleteButton,
  onClickChangeTodoStatus,
}) => {
  const renderStatusChangeButton = (todo: Todo) => {
    return (
      <>
        {/* 未着手ボタンの表示 */}
        {todo.status !== TODO_STATUS_MAP.NOT_START ? (
          <button
            onClick={() => {
              onClickChangeTodoStatus(todo.id, TODO_STATUS_MAP.NOT_START);
            }}
          >
            「未着手」にする
          </button>
        ) : null}

        {/* 作業中ボタンの表示 */}
        {todo.status !== TODO_STATUS_MAP.IN_PROGRESS ? (
          <button
            onClick={() => {
              onClickChangeTodoStatus(todo.id, TODO_STATUS_MAP.IN_PROGRESS);
            }}
          >
            「作業中」にする
          </button>
        ) : null}

        {/* 完了ボタンの表示 */}
        {todo.status !== TODO_STATUS_MAP.DONE ? (
          <button
            onClick={() => {
              onClickChangeTodoStatus(todo.id, TODO_STATUS_MAP.DONE);
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
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            ID{todo.id} : {todo.title}（状態 : {todo.status}）
            {renderStatusChangeButton(todo)}
            <button onClick={() => onClickDeleteButton(todo.id)}>
              削除する
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoItems;
