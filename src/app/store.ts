import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/admin/store/authSlice";
import taskUiReducer from "../features/tasks/store/taskUiSlice";

export const store = configureStore({
  reducer: { auth: authReducer, taskUi: taskUiReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
