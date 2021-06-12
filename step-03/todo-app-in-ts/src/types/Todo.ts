export const TODO_STATUS_MAP = {
  NOT_START: '未着手',
  IN_PROGRESS: '作業中',
  DONE: '完了',
} as const;

export const FILTER_STATUS_MAP = {
  ...TODO_STATUS_MAP,
  ALL: '全て',
} as const;

// https://steveholgado.com/typescript-types-from-arrays/
const TODO_STATUS_VALUES = Object.values(TODO_STATUS_MAP);
export type TodoStatusValue = typeof TODO_STATUS_VALUES[number];
export type Todo = {
  id: number;
  title: string;
  status: TodoStatusValue;
};

// https://steveholgado.com/typescript-types-from-arrays/
const FILTER_STATUS_VALUES = Object.values(FILTER_STATUS_MAP);
export type FilterValue = typeof FILTER_STATUS_VALUES[number];
