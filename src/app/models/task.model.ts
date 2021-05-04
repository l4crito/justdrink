export interface TaskModel {
    id: any;
    task?: string;
    taskToPlay?: string;
    type?: TaskType;
    highlight?: boolean;
    round?: number;
}

export enum TaskType {
    NORMAL = 'n',
    HOT = 's',
}