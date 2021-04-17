export interface TaskModel {
    id: any;
    task?: string;
    type?: TaskType[];
    highlight?: boolean;
}

export enum TaskType {
    DRINK = 'DRINK',
}