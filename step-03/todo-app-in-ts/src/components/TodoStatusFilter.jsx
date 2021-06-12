import React from 'react';
import { FILTER_STATUS_MAP } from '../hooks/TodoHook';

export default function TodoStatusFilter({ onClickFilterButton }) {
  return (
    <div>
      <h2>フィルター</h2>
      <button onClick={() => onClickFilterButton(FILTER_STATUS_MAP.ALL)}>
        「全て」表示する
      </button>
      <button onClick={() => onClickFilterButton(FILTER_STATUS_MAP.NOT_START)}>
        「未着手」のみ表示する
      </button>
      <button
        onClick={() => onClickFilterButton(FILTER_STATUS_MAP.IN_PROGRESS)}
      >
        「作業中」のみ表示する
      </button>
      <button onClick={() => onClickFilterButton(FILTER_STATUS_MAP.DONE)}>
        「完了」のみ表示する
      </button>
    </div>
  );
}
