export type TaskStatus = "active" | "completed";
export type TaskFilter = "today" | "week" | "month" | "all";

export interface Task {
  taskId: number;
  title: string;
  status: TaskStatus;
  completedat: string | null;
  createdAt: string;
  updateAt: string;
}

export interface GetTasksParams {
  filter: TaskFilter;
  status?: TaskStatus;
  page: number;
  pageSize: number;
}

export interface GetTasksResponse {
  tasks: Task[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  activeCount: number;
  completeCount: number;
}
