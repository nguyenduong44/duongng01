import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useAppSelector } from "../../../app/hooks";
import type { GetTasksParams } from "../types/task.types";
import { taskApi } from "../api/task.api";

export const taskKeys = {
  all: ["tasks"] as const,
  lists: () => [...taskKeys.all, "list"] as const,
  list: (params: GetTasksParams) => [...taskKeys.lists(), params] as const,
};

export function useGetTasks() {
  const { filter, status, page } = useAppSelector((state) => state.taskUi);
  const params: GetTasksParams = {
    filter,
    status: status || undefined,
    page,
    pageSize: 10,
  };
  return useQuery({
    queryKey: taskKeys.list(params),
    queryFn: () => taskApi.getTasks(params),
    placeholderData: keepPreviousData,
  });
}

export function useTaskMutation() {
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: taskApi.createTask,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: any }) =>
      taskApi.updateTask(id, payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() }),
  });
  const deleteMutation = useMutation({
    mutationFn: taskApi.deleteTask,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() }),
  });

  return { createMutation, updateMutation, deleteMutation };
}
