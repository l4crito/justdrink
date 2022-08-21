import { PlayerModel } from "./player.model";

export interface TaskModel {
    id: any;
    task?: string;
    taskToPlay?: string;
    type?: 'n'|'s';
    highlight?: boolean;
    round?: number;
    selected?: boolean;
    times: number;
}

export enum TaskType {
    NORMAL = 'n',
    HOT = 's',
}

export interface PlayerTaskModel {
    player?: PlayerModel | undefined | null;
    task?: TaskModel;
    round?: number
}
