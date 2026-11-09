import { apiClient } from "../../../api/client";
import type {
  GetTasksParams,
  GetTasksResponse,
  Task,
} from "../types/task.types";

export const taskApi = {
  getTasks: async (params: GetTasksParams) => {
    const { data } = await apiClient.get<{
      success: boolean;
      data: GetTasksResponse;
    }>("/tasks", { params });
    return data.data;
  },
  createTask: async (payload: { title: string; status: string }) => {
    const { data } = await apiClient.post<{ data: Task }>("/tasks", payload);
    return data.data;
  },
  updateTask: async (
    id: number,
    payload: { title: string; status: string },
  ) => {
    const { data } = await apiClient.put<{ data: Task }>(
      `/tasks/${id}`,
      payload,
    );

    return data.data;
  },
  deleteTask: async (id: number) => {
    await apiClient.delete(`/tasks/${id}`);
  },
};
