import { Job } from "./job";
import { Task } from "../task/task";

export class JobDTO {
    id: number;
    name: string;
    active: boolean;
    parentJob: number;
    tasks: Task[];
}