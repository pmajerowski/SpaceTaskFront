import { TaskStatus } from "./TaskStatus";

export interface Task {
    id?: string;
    name: string;
    description: string;
    status: TaskStatus;
}
