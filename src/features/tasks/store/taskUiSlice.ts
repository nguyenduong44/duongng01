import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskFilter, TaskStatus } from "../types/task.types.ts";

interface TaskUiState {
  filter: TaskFilter;
  status: TaskStatus | null;
  page: number;
}

const initialState: TaskUiState = {
  filter: "today",
  status: null,
  page: 1,
};

const taskUiSlice = createSlice({
  name: "taskUi",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<TaskFilter>) => {
      state.filter = action.payload;
      state.page = 1;
    },
    setStatus: (state, action: PayloadAction<TaskStatus | null>) => {
      state.status = action.payload;
      state.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setFilter, setStatus, setPage } = taskUiSlice.actions;
export default taskUiSlice.reducer;
