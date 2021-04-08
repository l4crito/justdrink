import { TaskModel } from "./task.model";

export interface PlayerModel {
    name?: string;
    shots?: number;
    gender?: Gender;
    like?: Gender;
    highlight?: boolean;
    task?: TaskModel | null;
    position?: PlayerPosition;
}

export enum Gender {
    MALE = 'HOMBRE',
    FEMA = 'MUJER',
    OTHER = 'OTRO'
}
export enum PlayerPosition {
    LEFT = 'left',
    MIDDLE = 'middle',
    RIGHT = 'right'
}