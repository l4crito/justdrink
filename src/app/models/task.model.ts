export interface TaskModel {
    id: number;
    task?: string;
    type?: TaskType[];
}

export enum TaskType {
    DRINK = 'DRINK',
}