import { Task } from "../task/task";

export class Job {
    id: number;
    name: string;
    active: boolean;
    parentJob: Job;
    tasks: Task[];
}